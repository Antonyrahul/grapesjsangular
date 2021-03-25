import { Component } from '@angular/core';
import "../assets/css/grapes.min.css"
import * as grapesjs from "../assets/grapes.min.js";
//import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grapesjstest';
  editor;
  
ngOnInit() {
  this.editor = grapesjs.init({
    container: '#gjs',
    fromElement: true,
    // Size of the editor
    height: '2000px',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: {
      id: 'gjs-',             // Prefix identifier that will be used inside storing and loading
      type: 'local',          // Type of the storage
      autosave: true,         // Store data automatically
      autoload: true,         // Autoload stored data on init
      stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
      storeComponents: true,  // Enable/Disable storing of components in JSON format
      storeStyles: true,      // Enable/Disable storing of rules in JSON format
      storeHtml: true,        // Enable/Disable storing of components as HTML string
      storeCss: true,         // Enable/Disable storing of rules as CSS string
    },
    components: '',
    style: '',
    plugins: ['gjs-preset-webpage'],
    pluginsOpts: {
      'gjs-preset-webpage': {
        navbarOpts: false,
        countdownOpts: false,
        formsOpts: false,
        blocksBasicOpts: {
      appendTo: '#blocks',
          blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3','table'],
          flexGrid: false,
          stylePrefix: 'lala-'
        }
      }
    },
 
      //    blockManager: {
      //   appendTo: '#blocks',
      //   blocks: [
      //     {
      //       id: 'section', // id is mandatory
      //       label: '<b>Section</b>', // You can use HTML/SVG inside labels
      //       attributes: { class:'gjs-block-section' },
      //       content: `<section>
      //         <h1>This is a simple title</h1>
      //         <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
      //       </section>`,
      //     }, {
      //       id: 'text',
      //       label: 'Text',
      //       content: '<div data-gjs-type="text">Insert your text here</div>',
      //     }, {
      //       id: 'image',
      //       label: 'Image',
      //       // Select the component once it's dropped
      //       select: true,
      //       // You can pass components as a JSON instead of a simple HTML string,
      //       // in this case we also use a defined component type `image`
      //       content: { type: 'image' },
      //       // This triggers `active` event on dropped components and the `image`
      //       // reacts by opening the AssetManager
      //       activate: true,
      //     }
      //   ]
      // },

  });

  var blockManager = this.editor.BlockManager;

// 'my-first-block' is the ID of the block

blockManager.add('my-first-block', {
  label: `<div>
  <img src="https://picsum.photos/70/70"/>
  <div class="my-label-block">Label block</div>
</div>`,
  content: '<div class="test"><p>name:rahul</p></div><style>p{color: blue;}</style>',
});
blockManager.add('my-seocnd-block', {
  label: 'Simple block 1',
  content: '<div class="test"><p style="color:green">name:rahul</p></div><style>p{color: aqua;}</style>',
});
blockManager.add('my-third-block', {
  label: 'Simple block 2',
  content: '<div class="test"> <p style="color:red">name:rahul</p></div><style>p{color: aqua;}</style>',
});
}
}

