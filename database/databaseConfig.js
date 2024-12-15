const mongoose = require("mongoose")

mongoose.connect(process.env.DB_STRING).then(() => {
    //console.log("connected to database")
})



const patientSchema = new mongoose.Schema({
    // Section 1: Patient Identification Information
    fullName: { type: String },
    patientId: { type: String }, // Unique Patient ID or Medical Record Number
    dateOfBirth: { type: Date },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },

    contactInfo_phoneNumber: { type: String },
    contactInfo_email: { type: String }, // Allow null values for email
    contactInfo_address: { type: String },

    emergencyContact_name: { type: String },
    emergencyContact_relationship: { type: String },
    emergencyContact_phoneNumber: { type: String },

    // Section 2: Medical History
    allergies: { type: String },
    chronicConditions: { type: String },
    pastSurgeries: { type: String },
    familyMedicalHistory: { type: String },

    // Section 3: Current Visit Details
    reasonForVisit: { type: String },
    currentMedications: { type: String },
    vitals_bloodPressure: { type: String },
    vitals_bheartRate: { type: String },
    vitals_btemperature: { type: String},
    vitals_brespiratoryRate: { type: String },
    attendingPhysician: { type: String },
    department: { type: String },

    // Section 4: Treatment and Diagnostics
    labTestResults: { type: String },
    imagingResults: { type: String },
    prescribedMedications: { type: String },
    ongoingTreatments: { type: String },

    // Section 5: Appointment History
    pastVisits_date: { type: Date },
    pastVisits_department: { type: String },
    pastVisits_doctor: { type: String },
    upcomingAppointments_date: { type: Date },
    upcomingAppointments_department: { type: String },
    upcomingAppointments_doctor: { type: String },

    // Section 6: Billing and Insurance Information
    billingSummary_charges: { type: String },
    billingSummary_payments: { type: String },
    billingSummary_outstandingBalance: { type: String },
    insurance_provider: { type: String },
    insurance_policyNumber: { type: String },

    dischargeSummary_diagnosis: { type: String },
    dischargeSummary_treatmentReceived: { type: String },
    dischargeSummary_followUpCare: { type: String },
    postDischargeMedications: { type: String },
    profilePhoto: { type: String },

}, { timestamps: true });






let User = new mongoose.model("User", patientSchema)

module.exports.User = User