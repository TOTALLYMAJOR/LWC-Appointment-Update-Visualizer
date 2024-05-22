import { LightningElement, track } from 'lwc';
import { subscribe, unsubscribe, onError } from 'lightning/empApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AppointmentUpdates extends LightningElement {
    @track updates = [];
    channelName = '/event/Service_Appointment_Update__e';
    subscription = {};

    connectedCallback() {
        this.handleSubscribe();
        onError(error => {
            console.error('EMP API error: ', error);
        });
    }

    disconnectedCallback() {
        this.handleUnsubscribe();
    }

    handleSubscribe() {
        const messageCallback = (response) => {
            const newUpdate = {
                id: response.data.payload.AppointmentId__c,
                status: response.data.payload.Status__c,
                updatedTime: response.data.payload.UpdatedTime__c
            };
            this.updates = [newUpdate, ...this.updates];
            this.showToast('Service Appointment Update', `Appointment ${newUpdate.id} status: ${newUpdate.status}`, 'info');
        };

        subscribe(this.channelName, -1, messageCallback).then(response => {
            this.subscription = response;
        });
    }

    handleUnsubscribe() {
        unsubscribe(this.subscription, response => {
            console.log('Unsubscribed from channel:', response.channel);
        });
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
}
