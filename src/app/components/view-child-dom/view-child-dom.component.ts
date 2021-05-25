import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-view-child-dom',
  templateUrl: './view-child-dom.component.html',
  styles: [],
})
export class ViewChildDOMComponent implements OnInit {
  @ViewChild('asTitle') title: ElementRef | any;
  @ViewChild('asImage') image: ElementRef | any;

  public data: DataModel = new DataModel();

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.data = {
      text: 'Hola mundo!!',
      url: 'https://media.giphy.com/media/1oHpUDxneEPrzBuoMS/giphy.gif',
    };
  }

  change() {
    const asTitle = this.title.nativeElement;
    const asImage = this.image.nativeElement;
    // console.log(asTitle);
    // asTitle.style.color = 'red'
    this.renderer2.setStyle(asTitle, 'color', 'red');
    this.renderer2.setAttribute(
      asImage,
      'src',
      'https://media.giphy.com/media/ixCowpFMOukIRT0aoU/giphy.gif'
    );
  }
}

export class DataModel {
  url?: string;
  text?: string;
}
