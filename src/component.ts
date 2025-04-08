import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<div class='title'>{{title}}</div>`,
  styles: '.title { font-size: xxx-large }',
})
export class AppComponent {
  title = 'hello world'
}
