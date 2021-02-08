import { Component, OnDestroy, OnInit } from '@angular/core';
import initUnlayer from './unlayer/initUnlayer'
import createUnlayerConfig from './unlayer/unlayerConfig'

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.styles.css']
})
export class EditorComponent implements OnInit, OnDestroy {

    editor: any;

    ngOnInit() {
        initUnlayer().then(unlayer => {
            this.initEditor(unlayer)
            this.setupListeners()
        })
    }

    ngOnDestroy() {
        console.log('ng on destroy - removing callbacks')
        this.editor.removeEventListener('design:updated')
        this.editor.removeEventListener('image')

        this.editor.unregisterCallback('design:updated')
        this.editor.unregisterCallback('image')
    }

    initEditor(unlayer) {
        this.editor = unlayer.createEditor(createUnlayerConfig())
    }

    setupListeners() {
        this.editor.addEventListener('design:updated', () => {
            console.log('On design updated')
        })

        this.editor.addEventListener('image', (file, done) => {
            console.log('On image uploaded')
        })
    }
}

