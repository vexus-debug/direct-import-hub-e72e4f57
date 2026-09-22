/**
 * Tutorial framework data.
 *
 * Structure: clinic type -> section (process / flow / setup area) -> tutorials.
 * Public tutorials are kept here so the guide pages stay aligned with the
 * labels and workflows used in the dental dashboard.
 */

export type TutorialStep = {
  title: string;
  body: string;
  /** Screenshot of the dashboard screen this step refers to (served from /public). */
  image?: string;
  imageAlt?: string;
};

export type Tutorial = {
  slug: string;
  title: string;
  summary: string;
  /** Estimated reading / doing time, e.g. "5 min" */
  duration?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  steps?: TutorialStep[];
};

export type TutorialSection = {
  slug: string;
  title: string;
  description: string;
  tutorials: Tutorial[];
};

export type ClinicTutorialType = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** lucide-react icon name used by the pages */
  icon: "Smile" | "Eye";
  sections: TutorialSection[];
};

/** The optometry library is intentionally still empty while its flows are documented. */
const emptySections = (): TutorialSection[] => [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Create your clinic, invite your team and find your way around the dashboard.",
    tutorials: [],
  },
  {
    slug: "setup",
    title: "Setup & Configuration",
    description: "Clinic details, branding, working hours, services, pricing and roles.",
    tutorials: [],
  },
  {
    slug: "patients",
    title: "Patients & Records",
    description: "Registering patients, medical records, documents and history.",
    tutorials: [],
  },
  {
    slug: "appointments",
    title: "Appointments & Scheduling",
    description: "Booking flows, calendars, reminders and no-show handling.",
    tutorials: [],
  },
  {
    slug: "clinical-flow",
    title: "Clinical Workflow",
    description: "From check-in to consultation, treatment notes and follow-up.",
    tutorials: [],
  },
  {
    slug: "billing",
    title: "Billing & Payments",
    description: "Invoices, payments, expenses and financial reporting.",
    tutorials: [],
  },
  {
    slug: "inventory",
    title: "Inventory & Supplies",
    description: "Stock items, reorder levels, suppliers and expiry tracking.",
    tutorials: [],
  },
  {
    slug: "reports",
    title: "Reports & Insights",
    description: "Understanding your dashboard metrics and exporting reports.",
    tutorials: [],
  },
];

const dentalSections = (): TutorialSection[] => [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Create your clinic, invite your team and find your way around the dashboard.",
    tutorials: [
      {
        slug: "find-your-way-around",
        title: "Find Your Way Around the Dashboard",
        summary: "Learn where the main dental workflows live and return to the right screen quickly.",
        duration: "5 min",
        level: "Beginner",
        steps: [
          { title: "Open your clinic dashboard", body: "Sign in and choose your clinic. The Dashboard is the starting point for appointments, patients, clinical work, finance and stock.", image: "/tutorials/dashboard.png", imageAlt: "Open your clinic dashboard — Clinexus dental dashboard" },
          { title: "Use the sidebar groups", body: "Open Patient Care for patients and appointments, Clinical for dental work, Finance for money matters, Reports for performance, and Inventory & Supply for stock.", image: "/tutorials/dashboard.png", imageAlt: "Use the sidebar groups — Clinexus dental dashboard" },
          { title: "Open Tutorials when you need a refresher", body: "Select Tutorials from the shared navigation to return to these guides. Use the page walk-through button when it appears on a dashboard screen.", image: "/tutorials/tutorials.png", imageAlt: "Open Tutorials when you need a refresher — Clinexus dental dashboard" },
          { title: "Check your access", body: "If a page is missing from the sidebar, ask an owner or admin to review your staff role. Access to billing, records and settings depends on that role.", image: "/tutorials/dashboard.png", imageAlt: "Check your access — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "set-up-your-first-day",
        title: "Set Up Your First Day",
        summary: "Complete the essential clinic settings before booking your first patient.",
        duration: "10 min",
        level: "Beginner",
        steps: [
          { title: "Open Settings", body: "Choose Settings from the shared navigation, then open Clinic Profile.", image: "/tutorials/settings.png", imageAlt: "Open Settings — Clinexus dental dashboard" },
          { title: "Save your clinic details", body: "Enter the clinic information your team and patients should see, optionally select Upload Logo, then select Save Changes.", image: "/tutorials/settings.png", imageAlt: "Save your clinic details — Clinexus dental dashboard" },
          { title: "Add your team", body: "Open Staff, select Add Staff, enter the staff member's details and role, then complete the dialog to create the account.", image: "/tutorials/settings.png", imageAlt: "Add your team — Clinexus dental dashboard" },
          { title: "Set working hours", body: "Open Schedules, select a staff member, turn working days on or off, and enter the working-hour and break times.", image: "/tutorials/schedules.png", imageAlt: "Set working hours — Clinexus dental dashboard" },
          { title: "Add your services", body: "Open Treatments, stay on Catalog, select Add Treatment, enter the service details and save it for use in plans and billing.", image: "/tutorials/settings.png", imageAlt: "Add your services — Clinexus dental dashboard" },
        ],
      },
    ],
  },
  {
    slug: "setup",
    title: "Setup & Configuration",
    description: "Clinic details, branding, working hours, services, pricing and roles.",
    tutorials: [
      {
        slug: "configure-clinic-settings",
        title: "Configure Clinic Settings",
        summary: "Keep your clinic profile, website, notifications and team settings in one place.",
        duration: "8 min",
        level: "Beginner",
        steps: [
          { title: "Open Clinic Profile", body: "In Settings, choose the Clinic Profile tab and review the clinic name and contact details.", image: "/tutorials/patient-profile.png", imageAlt: "Open Clinic Profile — Clinexus dental dashboard" },
          { title: "Upload your logo", body: "Select Upload Logo, choose the clinic logo, and check that it appears correctly before saving.", image: "/tutorials/settings.png", imageAlt: "Upload your logo — Clinexus dental dashboard" },
          { title: "Turn on the right notifications", body: "Open Notifications and choose the switches for Appointment Reminders, Payment Alerts, Lab Completion Alerts and Low Stock Alerts.", image: "/tutorials/settings.png", imageAlt: "Turn on the right notifications — Clinexus dental dashboard" },
          { title: "Manage members and chairs", body: "If you are an admin, use Members & Roles to edit details or change a role. Use Chairs to add or remove treatment chairs.", image: "/tutorials/settings.png", imageAlt: "Manage members and chairs — Clinexus dental dashboard" },
          { title: "Save each change", body: "Select Save Changes after updating a settings tab. Reopen the tab to confirm the saved values are still present.", image: "/tutorials/settings.png", imageAlt: "Save each change — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "add-staff-and-assign-roles",
        title: "Add Staff and Assign Roles",
        summary: "Invite your team and give each person only the access they need.",
        duration: "7 min",
        level: "Beginner",
        steps: [
          { title: "Open Staff", body: "Choose Staff from the Administration group and select Add Staff.", image: "/tutorials/staff.png", imageAlt: "Open Staff — Clinexus dental dashboard" },
          { title: "Enter staff details", body: "Complete the staff member's name and contact details in the Add Staff dialog.", image: "/tutorials/staff.png", imageAlt: "Enter staff details — Clinexus dental dashboard" },
          { title: "Choose a role", body: "Select the role that matches the person's work. Roles control which areas appear in their sidebar.", image: "/tutorials/staff.png", imageAlt: "Choose a role — Clinexus dental dashboard" },
          { title: "Create the staff record", body: "Complete the dialog to add the staff member, then check the role badge on their card.", image: "/tutorials/staff.png", imageAlt: "Create the staff record — Clinexus dental dashboard" },
          { title: "Correct a role later", body: "Use the edit icon on a staff card to open Edit Staff and update the person's details or role.", image: "/tutorials/staff.png", imageAlt: "Correct a role later — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "build-your-treatment-catalog",
        title: "Build Your Treatment Catalog",
        summary: "Create the services and prices your team will select during care and billing.",
        duration: "10 min",
        level: "Beginner",
        steps: [
          { title: "Open Treatments", body: "Choose Treatments from the Clinical group and select the Catalog tab.", image: "/tutorials/treatments.png", imageAlt: "Open Treatments — Clinexus dental dashboard" },
          { title: "Add a treatment", body: "Select Add Treatment and enter the treatment name, category, price and other required details.", image: "/tutorials/treatments.png", imageAlt: "Add a treatment — Clinexus dental dashboard" },
          { title: "Save the catalog item", body: "Complete the dialog to save the treatment, then confirm it appears in the catalog list.", image: "/tutorials/treatments.png", imageAlt: "Save the catalog item — Clinexus dental dashboard" },
          { title: "Review treatment plans separately", body: "Use the Treatment Plans tab for patient-specific plans; the Catalog is for reusable services.", image: "/tutorials/treatments.png", imageAlt: "Review treatment plans separately — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "set-up-your-public-website",
        title: "Set Up Your Public Website",
        summary: "Update your clinic website content, services, FAQs, testimonials and images.",
        duration: "15 min",
        level: "Intermediate",
        steps: [
          { title: "Choose a website section", body: "Open Website Settings and use the section selector to move between the public pages and content areas.", image: "/tutorials/website-settings.png", imageAlt: "Choose a website section — Clinexus dental dashboard" },
          { title: "Update the main content", body: "Edit the text and colours for the selected section. Use Reset to template colours if you want to restore the template palette.", image: "/tutorials/website-settings.png", imageAlt: "Update the main content — Clinexus dental dashboard" },
          { title: "Add repeated content", body: "Use Add service card, Add reason, Add testimonial, Add price row or Add question where the section offers those choices.", image: "/tutorials/website-settings.png", imageAlt: "Add repeated content — Clinexus dental dashboard" },
          { title: "Add images", body: "Use the image upload controls for the hero and gallery images, then check the preview for cropping and readability.", image: "/tutorials/website-settings.png", imageAlt: "Add images — Clinexus dental dashboard" },
          { title: "Use the built-in walkthrough", body: "Select Show me how when you want the page to point out the available website settings.", image: "/tutorials/website-settings.png", imageAlt: "Use the built-in walkthrough — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "manage-products-and-shop-orders",
        title: "Manage Products and Shop Orders",
        summary: "Add products and move shop orders from review through delivery.",
        duration: "8 min",
        level: "Intermediate",
        steps: [
          { title: "Add a product", body: "Open Shop Management and select Add Product. Enter the product information and complete the dialog.", image: "/tutorials/shop-management.png", imageAlt: "Add a product — Clinexus dental dashboard" },
          { title: "Review an order", body: "Use View on an order to inspect its items, customer details and current status.", image: "/tutorials/shop-management.png", imageAlt: "Review an order — Clinexus dental dashboard" },
          { title: "Confirm the order", body: "Select Confirm when the order is ready for processing.", image: "/tutorials/shop-management.png", imageAlt: "Confirm the order — Clinexus dental dashboard" },
          { title: "Complete delivery", body: "When the customer has received the order, select Mark Delivered. Use Cancel only when the order should not continue.", image: "/tutorials/shop-management.png", imageAlt: "Complete delivery — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "review-the-audit-log",
        title: "Review the Audit Log",
        summary: "Check a time-ordered record of important activity in your clinic.",
        duration: "4 min",
        level: "Intermediate",
        steps: [
          { title: "Open Audit Log", body: "Choose Audit Log from Administration. This page is available to owners and admins.", image: "/tutorials/audit-log.png", imageAlt: "Open Audit Log — Clinexus dental dashboard" },
          { title: "Scan recent activity", body: "Review the activity list to see what changed and when.", image: "/tutorials/audit-log.png", imageAlt: "Scan recent activity — Clinexus dental dashboard" },
          { title: "Investigate an entry", body: "Use the entry details to compare the action with the patient, invoice, staff or setting involved.", image: "/tutorials/audit-log.png", imageAlt: "Investigate an entry — Clinexus dental dashboard" },
          { title: "Follow up safely", body: "If an entry is unexpected, review the related record and ask an owner or admin to confirm the next action.", image: "/tutorials/audit-log.png", imageAlt: "Follow up safely — Clinexus dental dashboard" },
        ],
      },
    ],
  },
  {
    slug: "patients",
    title: "Patients & Records",
    description: "Registering patients, medical records, documents and history.",
    tutorials: [
      {
        slug: "register-a-patient",
        title: "Register a Patient",
        summary: "Create one complete patient record that the whole team can use.",
        duration: "6 min",
        level: "Beginner",
        steps: [
          { title: "Open Patients", body: "Choose Patients from Patient Care and select Add Patient.", image: "/tutorials/patients.png", imageAlt: "Open Patients — Clinexus dental dashboard" },
          { title: "Enter contact details", body: "Complete the patient's name, phone number and other required contact fields in the Add Patient dialog.", image: "/tutorials/patients.png", imageAlt: "Enter contact details — Clinexus dental dashboard" },
          { title: "Add useful history", body: "Record the patient's medical history and other relevant details when the dialog provides those fields.", image: "/tutorials/patients.png", imageAlt: "Add useful history — Clinexus dental dashboard" },
          { title: "Save the record", body: "Complete the dialog to create the patient, then search for the name or patient ID to confirm it is listed.", image: "/tutorials/patients.png", imageAlt: "Save the record — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "use-a-patient-profile",
        title: "Use a Patient Profile",
        summary: "Find the full patient history without creating duplicate records.",
        duration: "7 min",
        level: "Beginner",
        steps: [
          { title: "Find the patient", body: "On Patients, search by name, ID or phone, then select the patient row or card.", image: "/tutorials/patients.png", imageAlt: "Find the patient — Clinexus dental dashboard" },
          { title: "Review the overview", body: "Use the profile overview to check contact details, outstanding balance and recent activity.", image: "/tutorials/patient-profile.png", imageAlt: "Review the overview — Clinexus dental dashboard" },
          { title: "Open the right record tab", body: "Move between Clinical Notes, treatment plans, billing, prescriptions and the other available patient tabs.", image: "/tutorials/patient-profile.png", imageAlt: "Open the right record tab — Clinexus dental dashboard" },
          { title: "Edit patient details", body: "Select the edit button in the profile header, update the information, and complete the Edit Patient dialog.", image: "/tutorials/patients.png", imageAlt: "Edit patient details — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "add-clinical-notes",
        title: "Add Clinical Notes to a Visit",
        summary: "Keep the patient's clinical story clear for every clinician who follows up.",
        duration: "8 min",
        level: "Intermediate",
        steps: [
          { title: "Open the patient profile", body: "Search Patients and select the patient whose visit you are documenting.", image: "/tutorials/patient-profile.png", imageAlt: "Open the patient profile — Clinexus dental dashboard" },
          { title: "Open Clinical Notes", body: "Choose the Clinical Notes or SOAP area in the profile.", image: "/tutorials/patient-profile.png", imageAlt: "Open Clinical Notes — Clinexus dental dashboard" },
          { title: "Document the visit", body: "Enter the relevant Subjective, Objective, Assessment and Plan information, along with any treatment details requested by the form.", image: "/tutorials/documents.png", imageAlt: "Document the visit — Clinexus dental dashboard" },
          { title: "Review before saving", body: "Check tooth numbers, surfaces and follow-up instructions, then save the note using the form's save action.", image: "/tutorials/patient-profile.png", imageAlt: "Review before saving — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "upload-patient-documents",
        title: "Upload a Patient Document",
        summary: "Store referrals, scans and other patient files with the right record.",
        duration: "5 min",
        level: "Beginner",
        steps: [
          { title: "Open Documents", body: "Choose Documents from Administration and select Upload Document.", image: "/tutorials/documents.png", imageAlt: "Open Documents — Clinexus dental dashboard" },
          { title: "Choose the patient and file", body: "In the Upload Document dialog, select the patient, choose the file and enter the document details requested.", image: "/tutorials/patients.png", imageAlt: "Choose the patient and file — Clinexus dental dashboard" },
          { title: "Complete the upload", body: "Finish the dialog to attach the document to the patient record.", image: "/tutorials/documents.png", imageAlt: "Complete the upload — Clinexus dental dashboard" },
          { title: "Watch expiry alerts", body: "Return to Documents to review expiry alerts and remove a file with its delete action when it should no longer be kept.", image: "/tutorials/documents.png", imageAlt: "Watch expiry alerts — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "create-and-sign-consent",
        title: "Create and Sign a Consent Form",
        summary: "Prepare a consent form, connect it to a patient and record the signature.",
        duration: "8 min",
        level: "Intermediate",
        steps: [
          { title: "Open Consent Forms", body: "Choose Consent Forms from Clinical and stay on Patient Consents for patient records.", image: "/tutorials/consent-forms.png", imageAlt: "Open Consent Forms — Clinexus dental dashboard" },
          { title: "Create the consent", body: "Select the create consent action, choose the patient and template, and complete the form details.", image: "/tutorials/consent-forms.png", imageAlt: "Create the consent — Clinexus dental dashboard" },
          { title: "Sign the form", body: "Open the patient consent and select Sign to record the patient's completed consent.", image: "/tutorials/consent-forms.png", imageAlt: "Sign the form — Clinexus dental dashboard" },
          { title: "Keep templates ready", body: "Use Templates and select New Template to create a reusable form. Use Upload Scanned or Import Templates when you already have forms outside the app.", image: "/tutorials/consent-forms.png", imageAlt: "Keep templates ready — Clinexus dental dashboard" },
        ],
      },
    ],
  },
  {
    slug: "appointments",
    title: "Appointments & Scheduling",
    description: "Booking flows, calendars, reminders and no-show handling.",
    tutorials: [
      {
        slug: "book-an-appointment",
        title: "Book an Appointment",
        summary: "Place a patient into the correct chair, service and time slot.",
        duration: "6 min",
        level: "Beginner",
        steps: [
          { title: "Open Appointments", body: "Choose Appointments from Patient Care and select Book Appointment.", image: "/tutorials/appointments.png", imageAlt: "Open Appointments — Clinexus dental dashboard" },
          { title: "Choose the patient and service", body: "Select the patient, clinician, treatment or service, and any other required booking details.", image: "/tutorials/patients.png", imageAlt: "Choose the patient and service — Clinexus dental dashboard" },
          { title: "Choose the time", body: "Use the date and time controls to select an available slot. Check the day, week or month view if you need a wider view.", image: "/tutorials/appointments.png", imageAlt: "Choose the time — Clinexus dental dashboard" },
          { title: "Save the booking", body: "Complete the booking dialog, then confirm the appointment appears in Schedule View or List View.", image: "/tutorials/appointments.png", imageAlt: "Save the booking — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "handle-a-walk-in",
        title: "Handle a Walk-In Patient",
        summary: "Add an unplanned visit without losing the patient or appointment history.",
        duration: "5 min",
        level: "Beginner",
        steps: [
          { title: "Open the walk-in flow", body: "On Appointments, select Walk-In.", image: "/tutorials/waiting-list.png", imageAlt: "Open the walk-in flow — Clinexus dental dashboard" },
          { title: "Find or add the patient", body: "Select an existing patient or complete the patient details requested by the Walk-In dialog.", image: "/tutorials/patients.png", imageAlt: "Find or add the patient — Clinexus dental dashboard" },
          { title: "Add the visit details", body: "Choose the clinician, service and any required timing or notes.", image: "/tutorials/waiting-list.png", imageAlt: "Add the visit details — Clinexus dental dashboard" },
          { title: "Complete check-in", body: "Finish the dialog so the patient appears in the day's appointments or waiting queue.", image: "/tutorials/waiting-list.png", imageAlt: "Complete check-in — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "check-in-and-call-patients",
        title: "Check In and Call Patients",
        summary: "Move patients from arrival to the treatment queue in the right order.",
        duration: "5 min",
        level: "Beginner",
        steps: [
          { title: "Check in from Appointments", body: "Find the appointment and select Check in when the patient arrives.", image: "/tutorials/waiting-list.png", imageAlt: "Check in from Appointments — Clinexus dental dashboard" },
          { title: "Open Waiting List", body: "Choose Waiting List to see the queue and its Waiting, Called, In Progress and Completed counts.", image: "/tutorials/waiting-list.png", imageAlt: "Open Waiting List — Clinexus dental dashboard" },
          { title: "Call the next patient", body: "Select Call Next to move the next patient forward, or use Check In to add a patient directly to the queue.", image: "/tutorials/patients.png", imageAlt: "Call the next patient — Clinexus dental dashboard" },
          { title: "Finish the visit state", body: "Update the patient as they move through the queue so the team always sees who is waiting and who is being treated.", image: "/tutorials/waiting-list.png", imageAlt: "Finish the visit state — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "set-staff-schedules",
        title: "Set Staff Schedules",
        summary: "Make real availability visible before your team books appointments.",
        duration: "8 min",
        level: "Intermediate",
        steps: [
          { title: "Open Schedules", body: "Choose Schedules from Patient Care and select a staff member.", image: "/tutorials/schedules.png", imageAlt: "Open Schedules — Clinexus dental dashboard" },
          { title: "Set working days", body: "Use the day controls to turn each working day on or off.", image: "/tutorials/schedules.png", imageAlt: "Set working days — Clinexus dental dashboard" },
          { title: "Enter working hours", body: "Set the start and end times for each working day in the weekly grid.", image: "/tutorials/schedules.png", imageAlt: "Enter working hours — Clinexus dental dashboard" },
          { title: "Add breaks", body: "Block break periods so those times are not offered as available appointment slots.", image: "/tutorials/schedules.png", imageAlt: "Add breaks — Clinexus dental dashboard" },
        ],
      },
    ],
  },
  {
    slug: "clinical-flow",
    title: "Clinical Workflow",
    description: "From check-in to consultation, treatment notes and follow-up.",
    tutorials: [
      {
        slug: "update-a-dental-chart",
        title: "Update a Dental Chart",
        summary: "Record tooth conditions and procedures using the interactive chart.",
        duration: "8 min",
        level: "Intermediate",
        steps: [
          { title: "Select the patient", body: "Open Dental Charts and use Select patient to load the correct chart.", image: "/tutorials/patients.png", imageAlt: "Select the patient — Clinexus dental dashboard" },
          { title: "Choose a tooth", body: "Select the tooth on the adult FDI chart, then review its current condition and history.", image: "/tutorials/dental-charts.png", imageAlt: "Choose a tooth — Clinexus dental dashboard" },
          { title: "Add a procedure", body: "Select Add Procedure, choose the category and procedure, and enter the tooth, surface or other clinical details.", image: "/tutorials/dental-charts.png", imageAlt: "Add a procedure — Clinexus dental dashboard" },
          { title: "Save the entry", body: "Select Save Procedure or Add Entry, depending on the form, then check the procedure history for the new record.", image: "/tutorials/dental-charts.png", imageAlt: "Save the entry — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "create-a-treatment-plan",
        title: "Create a Treatment Plan",
        summary: "Turn planned dental work into a clear sequence of visits and costs.",
        duration: "10 min",
        level: "Intermediate",
        steps: [
          { title: "Open Treatment Plans", body: "In Treatments & Procedures, choose the Treatment Plans tab and select New Treatment Plan.", image: "/tutorials/treatments.png", imageAlt: "Open Treatment Plans — Clinexus dental dashboard" },
          { title: "Add the plan details", body: "Choose the patient, enter the Plan name, select a Priority and set a Target End Date when one is known.", image: "/tutorials/treatments.png", imageAlt: "Add the plan details — Clinexus dental dashboard" },
          { title: "Add visits", body: "Select Add Visit and enter the treatment, tooth number, visit number, estimated cost and scheduled date for each part of the plan.", image: "/tutorials/treatments.png", imageAlt: "Add visits — Clinexus dental dashboard" },
          { title: "Review progress", body: "Open the plan card to track Pending, Scheduled, In-progress or Skipped items.", image: "/tutorials/treatments.png", imageAlt: "Review progress — Clinexus dental dashboard" },
          { title: "Close the plan", body: "Use Pause Plan or Complete Plan when the treatment status changes. Cancel a plan only when it will not continue.", image: "/tutorials/treatments.png", imageAlt: "Close the plan — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "write-a-prescription",
        title: "Create a Prescription",
        summary: "Record medication instructions from the patient's clinical workflow.",
        duration: "6 min",
        level: "Intermediate",
        steps: [
          { title: "Open Prescriptions", body: "Choose Prescriptions from Clinical and select New Prescription.", image: "/tutorials/prescriptions.png", imageAlt: "Open Prescriptions — Clinexus dental dashboard" },
          { title: "Choose the patient", body: "Select the patient whose prescription you are preparing.", image: "/tutorials/patients.png", imageAlt: "Choose the patient — Clinexus dental dashboard" },
          { title: "Enter the prescription", body: "Add the medicine, dosage, frequency, duration and instructions requested by the form.", image: "/tutorials/prescriptions.png", imageAlt: "Enter the prescription — Clinexus dental dashboard" },
          { title: "Save and print", body: "Complete the dialog to save the prescription, then use its print action when the patient needs a paper copy.", image: "/tutorials/prescriptions.png", imageAlt: "Save and print — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "create-a-lab-case",
        title: "Create a Dental Lab Case",
        summary: "Send crowns, bridges, dentures and other lab work through its status pipeline.",
        duration: "8 min",
        level: "Intermediate",
        steps: [
          { title: "Open Lab Work", body: "Open the Lab Work screen from the clinic dashboard when your clinic uses lab cases.", image: "/tutorials/lab-work.png", imageAlt: "Open Lab Work — Clinexus dental dashboard" },
          { title: "Start a case", body: "Select New Lab Case, choose the patient, lab work type and laboratory.", image: "/tutorials/lab-work.png", imageAlt: "Start a case — Clinexus dental dashboard" },
          { title: "Add case requirements", body: "Enter shade or colour requirements, material preferences and any notes the laboratory needs.", image: "/tutorials/lab-work.png", imageAlt: "Add case requirements — Clinexus dental dashboard" },
          { title: "Move the case forward", body: "Use the case actions to move it through Pending, Sent, In Progress, Completed and Received.", image: "/tutorials/lab-work.png", imageAlt: "Move the case forward — Clinexus dental dashboard" },
          { title: "Share the case", body: "Use Send via WhatsApp or Send via Email when the laboratory needs the case details outside the dashboard.", image: "/tutorials/lab-work.png", imageAlt: "Share the case — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "complete-a-clinical-visit",
        title: "Complete a Clinical Visit",
        summary: "Connect check-in, charting, notes, treatment and follow-up in one workflow.",
        duration: "10 min",
        level: "Intermediate",
        steps: [
          { title: "Check the patient in", body: "Use Check in on the appointment or move the patient through Waiting List with Call Next.", image: "/tutorials/patients.png", imageAlt: "Check the patient in — Clinexus dental dashboard" },
          { title: "Review the record", body: "Open the patient profile, review the history, and check the dental chart before treatment.", image: "/tutorials/patient-profile.png", imageAlt: "Review the record — Clinexus dental dashboard" },
          { title: "Record care", body: "Add the procedure to the chart, update the treatment plan when needed, and write the clinical note.", image: "/tutorials/patient-profile.png", imageAlt: "Record care — Clinexus dental dashboard" },
          { title: "Finish the next step", body: "Create a prescription, consent or lab case when the visit requires it, then arrange the follow-up appointment.", image: "/tutorials/patient-profile.png", imageAlt: "Finish the next step — Clinexus dental dashboard" },
        ],
      },
    ],
  },
  {
    slug: "billing",
    title: "Billing & Payments",
    description: "Invoices, payments, expenses and financial reporting.",
    tutorials: [
      {
        slug: "create-and-send-an-invoice",
        title: "Create and Send an Invoice",
        summary: "Turn completed dental work into a clear invoice for the patient.",
        duration: "7 min",
        level: "Beginner",
        steps: [
          { title: "Open Billing", body: "Choose Billing from Finance and select Create Invoice.", image: "/tutorials/billing.png", imageAlt: "Open Billing — Clinexus dental dashboard" },
          { title: "Choose the patient", body: "Select the patient and add the treatments, products or other billable items.", image: "/tutorials/patients.png", imageAlt: "Choose the patient — Clinexus dental dashboard" },
          { title: "Review the totals", body: "Check quantities, prices, discounts and the amount due before completing the invoice.", image: "/tutorials/billing.png", imageAlt: "Review the totals — Clinexus dental dashboard" },
          { title: "Create the invoice", body: "Complete the Create Invoice dialog, then find the new invoice in the billing list.", image: "/tutorials/billing.png", imageAlt: "Create the invoice — Clinexus dental dashboard" },
          { title: "Share the invoice", body: "Open the invoice detail and use the available sharing or sending action when the patient needs a copy.", image: "/tutorials/billing.png", imageAlt: "Share the invoice — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "record-a-payment-and-statement",
        title: "Record a Payment and Client Statement",
        summary: "Keep balances accurate and give patients a useful view of what they owe.",
        duration: "7 min",
        level: "Beginner",
        steps: [
          { title: "Find the invoice", body: "Use Billing search and the status filter to find the patient's invoice, then open its detail.", image: "/tutorials/billing.png", imageAlt: "Find the invoice — Clinexus dental dashboard" },
          { title: "Record the payment", body: "Use the invoice detail payment action to enter the amount and payment information, including a part-payment when needed.", image: "/tutorials/billing.png", imageAlt: "Record the payment — Clinexus dental dashboard" },
          { title: "Check the balance", body: "Confirm that the invoice status and outstanding balance reflect the payment.", image: "/tutorials/billing.png", imageAlt: "Check the balance — Clinexus dental dashboard" },
          { title: "Create a statement", body: "Return to Billing and select Client Statement, choose the patient and complete the statement dialog.", image: "/tutorials/billing.png", imageAlt: "Create a statement — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "prepare-a-treatment-estimate",
        title: "Prepare a Treatment Estimate",
        summary: "Give a patient a proposed cost before treatment starts.",
        duration: "8 min",
        level: "Intermediate",
        steps: [
          { title: "Open Estimates", body: "Choose Estimates from Finance and select New Estimate.", image: "/tutorials/estimates.png", imageAlt: "Open Estimates — Clinexus dental dashboard" },
          { title: "Choose the patient", body: "Select the patient and add the proposed services with Add Item.", image: "/tutorials/patients.png", imageAlt: "Choose the patient — Clinexus dental dashboard" },
          { title: "Review the estimate", body: "Check the treatment items, quantities, prices and total before completing New Treatment Estimate.", image: "/tutorials/estimates.png", imageAlt: "Review the estimate — Clinexus dental dashboard" },
          { title: "Send it to the patient", body: "Use Send on the estimate when it is ready for review.", image: "/tutorials/patients.png", imageAlt: "Send it to the patient — Clinexus dental dashboard" },
          { title: "Continue after a decision", body: "Use Accept or Decline to record the response. Convert an accepted estimate to an invoice when treatment is ready to bill.", image: "/tutorials/estimates.png", imageAlt: "Continue after a decision — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "set-up-a-payment-plan",
        title: "Set Up a Payment Plan",
        summary: "Split an eligible invoice into manageable installments and track each one.",
        duration: "7 min",
        level: "Intermediate",
        steps: [
          { title: "Open Payment Plans", body: "Choose Payment Plans from Finance and select Create Plan.", image: "/tutorials/payment-plans.png", imageAlt: "Open Payment Plans — Clinexus dental dashboard" },
          { title: "Link the invoice", body: "In Create Payment Plan, select the invoice and enter the installment schedule requested by the patient.", image: "/tutorials/billing.png", imageAlt: "Link the invoice — Clinexus dental dashboard" },
          { title: "Create the plan", body: "Complete the dialog and check that the plan appears with its active installments.", image: "/tutorials/payment-plans.png", imageAlt: "Create the plan — Clinexus dental dashboard" },
          { title: "Record installments", body: "When a payment arrives, select Mark Paid on the matching installment.", image: "/tutorials/payment-plans.png", imageAlt: "Record installments — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "record-expenses-and-commissions",
        title: "Record Expenses and Commissions",
        summary: "Keep operating costs and team payouts visible alongside revenue.",
        duration: "10 min",
        level: "Intermediate",
        steps: [
          { title: "Add an expense", body: "Open Expenses, select Add Expense, and enter the vendor, category, amount and date.", image: "/tutorials/expenses.png", imageAlt: "Add an expense — Clinexus dental dashboard" },
          { title: "Save and review", body: "Complete the Add Expense dialog, then use search and category filters to find the saved expense.", image: "/tutorials/expenses.png", imageAlt: "Save and review — Clinexus dental dashboard" },
          { title: "Create a payout", body: "If you manage commissions, open Commissions and select New Payout. Enter the staff member, amount and related details.", image: "/tutorials/expenses.png", imageAlt: "Create a payout — Clinexus dental dashboard" },
          { title: "Record payment", body: "Open the payout and select Record Payment when the commission has been paid.", image: "/tutorials/billing.png", imageAlt: "Record payment — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "configure-revenue-allocation",
        title: "Configure Revenue Allocation",
        summary: "Set the rules that split clinic revenue between staff and the reserve.",
        duration: "8 min",
        level: "Advanced",
        steps: [
          { title: "Open Revenue Allocation", body: "Choose Revenue Allocation from Finance. This area is available to owners and admins.", image: "/tutorials/revenue-allocation.png", imageAlt: "Open Revenue Allocation — Clinexus dental dashboard" },
          { title: "Review the snapshot", body: "Check Total Revenue, Revenue This Month and the War Chest reserve before changing a rule.", image: "/tutorials/revenue-allocation.png", imageAlt: "Review the snapshot — Clinexus dental dashboard" },
          { title: "Turn automatic splitting on or off", body: "Use the auto-split toggle to control whether new revenue follows the allocation rules.", image: "/tutorials/revenue-allocation.png", imageAlt: "Turn automatic splitting on or off — Clinexus dental dashboard" },
          { title: "Edit the allocation rules", body: "Use the edit action, update the percentages so they total 100%, then save the rule.", image: "/tutorials/revenue-allocation.png", imageAlt: "Edit the allocation rules — Clinexus dental dashboard" },
          { title: "Review staff shares", body: "Edit staff sub-splits when needed, save the changes and confirm the summary reflects the new allocation.", image: "/tutorials/staff.png", imageAlt: "Review staff shares — Clinexus dental dashboard" },
        ],
      },
    ],
  },
  {
    slug: "inventory",
    title: "Inventory & Supplies",
    description: "Stock items, reorder levels, suppliers and expiry tracking.",
    tutorials: [
      {
        slug: "add-and-maintain-stock",
        title: "Add and Maintain Stock",
        summary: "Keep consumables and equipment counts accurate during daily work.",
        duration: "8 min",
        level: "Beginner",
        steps: [
          { title: "Add an item", body: "Open Inventory and select Add Item. Enter the item name, quantity, reorder level and other required details.", image: "/tutorials/inventory.png", imageAlt: "Add an item — Clinexus dental dashboard" },
          { title: "Save the item", body: "Complete the Add Inventory Item dialog, then confirm the item appears in the stock table.", image: "/tutorials/inventory.png", imageAlt: "Save the item — Clinexus dental dashboard" },
          { title: "Restock an item", body: "Use Restock on the relevant row, enter the received quantity in Restock Item, and complete the dialog.", image: "/tutorials/inventory.png", imageAlt: "Restock an item — Clinexus dental dashboard" },
          { title: "Record usage", body: "Use Use on the relevant row, enter the quantity consumed and confirm the Use Stock action.", image: "/tutorials/inventory.png", imageAlt: "Record usage — Clinexus dental dashboard" },
          { title: "Watch low stock", body: "Review the low-stock alert banner and restock items before a procedure is affected.", image: "/tutorials/inventory.png", imageAlt: "Watch low stock — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "manage-suppliers",
        title: "Manage Suppliers",
        summary: "Keep supplier contacts ready for reorders and purchase orders.",
        duration: "6 min",
        level: "Beginner",
        steps: [
          { title: "Open Suppliers", body: "Choose Suppliers from Inventory & Supply and select Add Supplier.", image: "/tutorials/suppliers.png", imageAlt: "Open Suppliers — Clinexus dental dashboard" },
          { title: "Enter supplier details", body: "Add the company or supplier name, contact, phone, email and notes in the Add Supplier form.", image: "/tutorials/suppliers.png", imageAlt: "Enter supplier details — Clinexus dental dashboard" },
          { title: "Save the supplier", body: "Complete the form and confirm the supplier appears in the list.", image: "/tutorials/suppliers.png", imageAlt: "Save the supplier — Clinexus dental dashboard" },
          { title: "Keep the list current", body: "Update the active or inactive status and remove a supplier only when it should no longer be used.", image: "/tutorials/suppliers.png", imageAlt: "Keep the list current — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "create-a-purchase-order",
        title: "Create and Receive a Purchase Order",
        summary: "Order supplies and update stock when they arrive.",
        duration: "9 min",
        level: "Intermediate",
        steps: [
          { title: "Start a purchase order", body: "Open Purchase Orders and select New PO or Create Order.", image: "/tutorials/purchase-orders.png", imageAlt: "Start a purchase order — Clinexus dental dashboard" },
          { title: "Choose the supplier and items", body: "Select the supplier, add the stock items and enter the quantities requested.", image: "/tutorials/suppliers.png", imageAlt: "Choose the supplier and items — Clinexus dental dashboard" },
          { title: "Save the order", body: "Complete the New Purchase Order dialog and check that the order is in draft status.", image: "/tutorials/purchase-orders.png", imageAlt: "Save the order — Clinexus dental dashboard" },
          { title: "Send the order", body: "Select Mark Ordered when the purchase order has been sent to the supplier.", image: "/tutorials/purchase-orders.png", imageAlt: "Send the order — Clinexus dental dashboard" },
          { title: "Receive the stock", body: "When the delivery arrives, select Mark Received or Received. Confirm that the inventory quantity updates.", image: "/tutorials/inventory.png", imageAlt: "Receive the stock — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "map-treatment-materials",
        title: "Map Treatment Materials",
        summary: "Connect procedures to the stock items they consume.",
        duration: "7 min",
        level: "Intermediate",
        steps: [
          { title: "Open Treatment Materials", body: "Choose Treatment Materials from Inventory & Supply.", image: "/tutorials/treatment-materials.png", imageAlt: "Open Treatment Materials — Clinexus dental dashboard" },
          { title: "Add a mapping", body: "Select Add Mapping or Link a material, then choose the treatment and stock item.", image: "/tutorials/treatment-materials.png", imageAlt: "Add a mapping — Clinexus dental dashboard" },
          { title: "Set the quantity", body: "Enter the quantity used for one procedure so the clinic can track consumption consistently.", image: "/tutorials/treatment-materials.png", imageAlt: "Set the quantity — Clinexus dental dashboard" },
          { title: "Save and review", body: "Complete Map Treatment to Material and check the mapping list. Remove a link only when the treatment no longer uses that item.", image: "/tutorials/treatment-materials.png", imageAlt: "Save and review — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "record-inventory-costs",
        title: "Record Inventory Costs",
        summary: "Capture supply transactions so costs and stock movements stay traceable.",
        duration: "6 min",
        level: "Intermediate",
        steps: [
          { title: "Open Inventory Costs", body: "Choose Inventory Costs from Inventory & Supply.", image: "/tutorials/inventory-costs.png", imageAlt: "Open Inventory Costs — Clinexus dental dashboard" },
          { title: "Start a transaction", body: "Select Record Inventory Transaction and choose the item and transaction type.", image: "/tutorials/inventory-costs.png", imageAlt: "Start a transaction — Clinexus dental dashboard" },
          { title: "Enter the cost details", body: "Add the quantity, amount, date and notes requested by the dialog.", image: "/tutorials/inventory-costs.png", imageAlt: "Enter the cost details — Clinexus dental dashboard" },
          { title: "Save and verify", body: "Complete the dialog, then check the transaction list and the item's current stock or cost information.", image: "/tutorials/inventory-costs.png", imageAlt: "Save and verify — Clinexus dental dashboard" },
        ],
      },
    ],
  },
  {
    slug: "reports",
    title: "Reports & Insights",
    description: "Understanding your dashboard metrics and exporting reports.",
    tutorials: [
      {
        slug: "run-a-clinic-report",
        title: "Run a Clinic Report",
        summary: "Compare revenue, treatments, patients and team performance for a selected period.",
        duration: "7 min",
        level: "Beginner",
        steps: [
          { title: "Open Reports", body: "Choose Reports from the Reports group.", image: "/tutorials/reports.png", imageAlt: "Open Reports — Clinexus dental dashboard" },
          { title: "Choose the date range", body: "Set the From and To dates or months for the period you want to review.", image: "/tutorials/reports.png", imageAlt: "Choose the date range — Clinexus dental dashboard" },
          { title: "Read the key numbers", body: "Review the KPI cards, revenue trend, treatment mix and dentist performance table.", image: "/tutorials/reports.png", imageAlt: "Read the key numbers — Clinexus dental dashboard" },
          { title: "Export the results", body: "Select Export or Export CSV to download the report for sharing or further review.", image: "/tutorials/reports.png", imageAlt: "Export the results — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "use-advanced-analytics",
        title: "Use Advanced Analytics",
        summary: "Explore deeper clinic performance views when standard reports are not enough.",
        duration: "8 min",
        level: "Advanced",
        steps: [
          { title: "Open Advanced Analytics", body: "Choose Advanced Analytics from the Reports group. Access is limited to the roles allowed by your clinic.", image: "/tutorials/analytics.png", imageAlt: "Open Advanced Analytics — Clinexus dental dashboard" },
          { title: "Start with the overview", body: "Review the available dashboards and headline metrics before narrowing your investigation.", image: "/tutorials/analytics.png", imageAlt: "Start with the overview — Clinexus dental dashboard" },
          { title: "Compare the charts", body: "Use the displayed charts to compare revenue, activity and performance across the available periods or categories.", image: "/tutorials/analytics.png", imageAlt: "Compare the charts — Clinexus dental dashboard" },
          { title: "Turn an insight into action", body: "Use the result to adjust schedules, treatment catalogues, stock levels or follow-up work, then review the next reporting period.", image: "/tutorials/analytics.png", imageAlt: "Turn an insight into action — Clinexus dental dashboard" },
        ],
      },
      {
        slug: "review-profitability",
        title: "Review Profitability",
        summary: "Understand how revenue, expenses and margins are shaping the clinic.",
        duration: "6 min",
        level: "Advanced",
        steps: [
          { title: "Open Profitability", body: "Choose Profitability from Finance when your role has access to the page.", image: "/tutorials/profitability.png", imageAlt: "Open Profitability — Clinexus dental dashboard" },
          { title: "Compare revenue and expenses", body: "Review the revenue, expense and margin views to see what is driving the current result.", image: "/tutorials/expenses.png", imageAlt: "Compare revenue and expenses — Clinexus dental dashboard" },
          { title: "Look for patterns", body: "Compare the treatment, staff or period details shown on the page to identify areas that need attention.", image: "/tutorials/profitability.png", imageAlt: "Look for patterns — Clinexus dental dashboard" },
          { title: "Follow up in the source screen", body: "Use Billing, Expenses, Treatments or Reports to investigate the record behind an unexpected result.", image: "/tutorials/profitability.png", imageAlt: "Follow up in the source screen — Clinexus dental dashboard" },
        ],
      },
    ],
  },
];

export const tutorialClinicTypes: ClinicTutorialType[] = [
  {
    slug: "dental-clinics",
    name: "Dental Clinics",
    tagline: "Set up charting, treatment plans and recalls.",
    description:
      "Step-by-step guides for dental practices: from first login to running multi-visit treatment plans, recalls and billing.",
    icon: "Smile",
    sections: dentalSections(),
  },
  {
    slug: "eye-clinics",
    name: "Eye Care & Optometry",
    tagline: "Set up refraction records, lens inventory and referrals.",
    description:
      "Step-by-step guides for optometry and eye care practices: prescriptions, visual acuity records, lens stock and referrals.",
    icon: "Eye",
    sections: emptySections(),
  },
];

export const getClinicType = (slug?: string) =>
  tutorialClinicTypes.find((c) => c.slug === slug);

export const getSection = (clinicSlug?: string, sectionSlug?: string) =>
  getClinicType(clinicSlug)?.sections.find((s) => s.slug === sectionSlug);

export const getTutorial = (
  clinicSlug?: string,
  sectionSlug?: string,
  tutorialSlug?: string,
) => getSection(clinicSlug, sectionSlug)?.tutorials.find((t) => t.slug === tutorialSlug);

export const countTutorials = (clinic: ClinicTutorialType) =>
  clinic.sections.reduce((total, section) => total + section.tutorials.length, 0);
