import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-summernote-test',
  templateUrl: './summernote-test.component.html',
  styleUrls: ['./summernote-test.component.scss']
})
export class SummernoteTestComponent implements OnInit {

  fg!: FormGroup;

  editorControl: FormControl = new FormControl('test');

  constructor(fb: FormBuilder) {
    this.fg = fb.group({
      editorText: this.editorControl
    });
  }

  configEditor = {
    tabsize: 2,
    height: 600,
    toolbar: [
      ['misc', ['undo', 'redo']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
      ['para', ['style0', 'ul', 'ol', 'paragraph']]
    ],
  };

  ngOnInit() {
  }

}
