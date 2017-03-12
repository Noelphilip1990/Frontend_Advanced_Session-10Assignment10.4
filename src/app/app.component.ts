import { Component } from '@angular/core';
import { ModalDemoComponent } from './modal-demo.component';
@Component({
    selector: 'modal-demo',
	template: `
	<select-app></select-app>`,
	
})

export class AppComponent{
	text: string = "Modal Sample Text";
	constructor()
	{
		
	}
}
