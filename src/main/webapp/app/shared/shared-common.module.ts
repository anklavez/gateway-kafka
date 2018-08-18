import { NgModule } from '@angular/core';

import { GatewayWithKafkaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GatewayWithKafkaSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GatewayWithKafkaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GatewayWithKafkaSharedCommonModule {}
