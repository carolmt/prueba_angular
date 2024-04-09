import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img src='https://img2.rtve.es/i/?w=1600&i=1614352806474.png'/>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim ultrices mauris. Aliquam erat volutpat. Nunc sed pharetra 
    ex, vitae lobortis sem. Donec feugiat tristique odio, eu sollicitudin mi porttitor eu. Duis rutrum pellentesque ex a euismod. Donec
    bibendum urna quis risus malesuada, eget efficitur eros commodo. Duis nec dignissim nibh. Nullam sed tincidunt arcu. In sed 
    ullamcorper risus, id imperdiet orci. 
    </p> 
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }
  `,
})
export class CommentsComponent {

}
