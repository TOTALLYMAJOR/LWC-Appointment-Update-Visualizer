# LWC-Appointment-Update-Visualizer
Lightning Web Component (LWC) that visualizes real-time service appointment updates using the Field Service Mobile App
![image](https://github.com/TOTALLYMAJOR/LWC-Appointment-Update-Visualizer/assets/7169661/19f84b9e-6e70-42b8-894a-5ae107f9d5e2)
# Real-Time Service Appointment Updates LWC

## Overview
This Lightning Web Component (LWC) visualizes real-time updates for service appointments using Salesforce Platform Events. Field agents can view the updates directly in the Salesforce app.

## Setup

### Prerequisites
- Salesforce CLI
- Authenticated Salesforce Org

### Steps

1. **Define Platform Event**:
   - Create a Platform Event named `Service_Appointment_Update__e` with fields for Appointment ID, Status, and Updated Time.

2. **Create LWC**:
   - Use the Salesforce CLI to create a new LWC named `AppointmentUpdates`.

3. **Implement LWC**:
   - Edit `appointmentUpdates.js` to subscribe to the Platform Event and handle updates.
   - Edit `appointmentUpdates.html` to display the updates.

4. **Deploy and Add to Lightning Page**:
   - Deploy the LWC to your Salesforce org.
   - Add the LWC to a Lightning App Builder page.

## Usage
- Field agents can view real-time updates for service appointments directly in the Salesforce app.

## Components

### `appointmentUpdates.js`
Handles subscription to Platform Events and updates the UI with new service appointment information.

### `appointmentUpdates.html`
Displays the real-time service appointment updates in a Lightning card.

## Testing
- Publish events manually using Developer Console or a test script to verify the updates.

## Future Enhancements
- Add filtering and search functionality.
- Improve UI/UX with better formatting.
