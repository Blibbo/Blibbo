package dev

import (
	"io/fs"
	"os"
	"path/filepath"
	"sync"
	"time"

	"github.com/fsnotify/fsnotify"
)

type watcherCallback func(fsnotify.Event)

func watchRecursive(watcher *fsnotify.Watcher, root string) error {
	return filepath.WalkDir(root, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if d.IsDir() {
			err = watcher.Add(path)
			if err != nil {
				panic(err)
			}
		}

		return nil
	})
}

func watch(callback watcherCallback, op fsnotify.Op, paths ...string) {
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		panic(err)
	}

	for _, path := range paths {
		// err = watcher.Add(filepath.Clean(path))
		// if err != nil {
		// 	panic(err)
		// }

		info, err := os.Stat(path)
		if err != nil {
			panic(err)
		}

		if info.IsDir() {
			watchRecursive(watcher, path)
		} else {
			err = watcher.Add(path)
			if err != nil {
				panic(err)
			}
		}

	}

	var (
		triggerDebounceMu sync.Mutex
		triggerDebounce   *time.Timer
		milliseconds      time.Duration = 200
	)

	go func() {
		for {
			select {
			case event := <-watcher.Events:
				if event.Op&op == 0 {
					continue
				}

				func() {
					triggerDebounceMu.Lock()
					defer triggerDebounceMu.Unlock()

					if triggerDebounce != nil {
						triggerDebounce.Stop()
					}

					triggerDebounce = time.AfterFunc(milliseconds*time.Millisecond, func() {
						callback(event)
					})
				}()
			case err := <-watcher.Errors:
				panic(err)
			}
		}
	}()
}

func WatchWriteCreate(path string, callback watcherCallback) {

	watch(callback, fsnotify.Write|fsnotify.Create, path)
}

func WatchWrite(path string, callback watcherCallback) {
	watch(callback, fsnotify.Write, path)
}

func WatchPathsFull(callback watcherCallback, paths ...string) {
	watch(callback, fsnotify.Write|fsnotify.Create|fsnotify.Remove|fsnotify.Rename, paths...)
}
