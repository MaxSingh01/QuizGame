import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {
  @Input () iscorrect : Boolean =false
  constructor( private ef: ElementRef,private reder: Renderer2) { }
  @HostListener('click') answer(){
    if(this.iscorrect){
      this.reder.setStyle(this.ef.nativeElement,'background','green')
      this.reder.setStyle(this.ef.nativeElement,'color','white')
      this.reder.setStyle(this.ef.nativeElement,'border','2px solid white')

    }
    else{
      this.reder.setStyle(this.ef.nativeElement,'background','red')
      this.reder.setStyle(this.ef.nativeElement,'color','white')
      this.reder.setStyle(this.ef.nativeElement,'border','2px solid white')
    }
  }
}
