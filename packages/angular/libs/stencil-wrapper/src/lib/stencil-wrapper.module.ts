import { NgModule } from "@angular/core";
import { DIRECTIVES } from "./index";
import { defineCustomElements} from '@nihaldemo/stencil/loader';

defineCustomElements(window);

@NgModule({
    declarations: [
        ...DIRECTIVES
    ],
    exports: [
        ...DIRECTIVES
    ]
})

export class StencilWrapperModule{ }