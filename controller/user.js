const express = require("express")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const { generateAcessToken } = require('../utils/utils')
const { User, } = require("../database/databaseConfig");






module.exports.getUserFromJwt = async (req, res, next) => {
   try {
      let token = req.headers["header"]
      if (!token) {
         throw new Error("a token is needed ")
      }
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY)

      const user = await User.findOne({ email: decodedToken.email })

      if (!user) {
         //if user does not exist return 404 response
         return res.status(404).json({
            response: "user has been deleted"
         })
      }

      return res.status(200).json({
         response: {
            user: user,
         }
      })

   } catch (error) {
      error.message = error.message || "an error occured try later"
      return next(error)
   }

}

module.exports.signup = async (req, res, next) => {
   try {
      let {
         fullName,
         patientId,
         dateOfBirth,
         gender,
         contactInfo_phoneNumber,
         contactInfo_email,
         contactInfo_address,
         emergencyContact_name,
         emergencyContact_relationship,
         emergencyContact_phoneNumber,
         allergies,
         chronicConditions,
         pastSurgeries,
         familyMedicalHistory,
         reasonForVisit,
         currentMedications,
         vitals_bloodPressure,
         vitals_bheartRate,
         vitals_btemperature,
         vitals_brespiratoryRate,
         attendingPhysician,
         department,
         labTestResults,
         imagingResults,
         prescribedMedications,
         ongoingTreatments,
         pastVisits_date,
         pastVisits_department,
         pastVisits_doctor,
         upcomingAppointments_date,
         upcomingAppointments_department,
         upcomingAppointments_doctor,
         billingSummary_charges,
         billingSummary_payments,
         billingSummary_outstandingBalance,
         insurance_provider,
         insurance_policyNumber,
         dischargeSummary_diagnosis,
         dischargeSummary_treatmentReceived,
         dischargeSummary_followUpCare,
         postDischargeMedications,
         profilePhoto
       } = req.body;

      console.log(req.body);  // For debugging, remove later

      // Email verification: Check if patient already exists by patientId
      let patientExist = await User.findOne({ patientId });

      if (patientExist) {
         let error = new Error("Patient with this ID is already registered.");
         error.statusCode = 301;
         return next(error);
      }


      // Proceed to create the patient record
      let newPatient = new User({
         _id: new mongoose.Types.ObjectId(),
         fullName,
         patientId,
         dateOfBirth,
         gender,
         contactInfo_phoneNumber,
         contactInfo_email,
         contactInfo_address,
         emergencyContact_name,
         emergencyContact_relationship,
         emergencyContact_phoneNumber,
         allergies,
         chronicConditions,
         pastSurgeries,
         familyMedicalHistory,
         reasonForVisit,
         currentMedications,
         vitals_bloodPressure,
         vitals_bheartRate,
         vitals_btemperature,
         vitals_brespiratoryRate,
         attendingPhysician,
         department,
         labTestResults,
         imagingResults,
         prescribedMedications,
         ongoingTreatments,
         pastVisits_date,
         pastVisits_department,
         pastVisits_doctor,
         upcomingAppointments_date,
         upcomingAppointments_department,
         upcomingAppointments_doctor,
         billingSummary_charges,
         billingSummary_payments,
         billingSummary_outstandingBalance,
         insurance_provider,
         insurance_policyNumber,
         dischargeSummary_diagnosis,
         dischargeSummary_treatmentReceived,
         dischargeSummary_followUpCare,
         postDischargeMedications,
         profilePhoto
      });

      // Save the patient record to the database
      let savedPatient = await newPatient.save();

      if (!savedPatient) {
         // Handle error if patient could not be saved
         let error = new Error("An error occurred while saving the patient data.");
         return next(error);
      }

      // Generate an access token for the new patient (JWT)
      let token = generateAcessToken(contactInfo_email);

      // Return the response with the saved patient details and the generated token
      return res.status(200).json({
         response: {
            user: savedPatient,
            token: token,
            expiresIn: '500', // Customize the expiration time for the token
         }
      });

   } catch (error) {
      console.log(error);
      error.message = error.message || "An error occurred, please try again later.";
      return next(error);
   }
};


module.exports.login = async (req, res) => {
    try {
        // Destructure the patientId from the request body
        const { patientId } = req.body;

        if (!patientId) {
            return res.status(400).json({ message: 'Patient ID is required.' });
        }
        // Find the patient in the database
        const patient = await User.findOne({ patientId:patientId });

        // If patient not found
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        // You can add more checks here if needed, such as password verification if you are handling passwords
        let token = generateAcessToken(patientId)
        // If patient exists, return a success response (add a JWT token if you plan to use it)
        console.log(patient)
        return res.status(200).json({
            message: 'Login successful',
            user: patient,
            token: token,
            expiresIn: '5000',
       
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};


//user routes
module.exports.getUser = async (req, res, next) => {

   try {
      let userId = req.params.id

      let user_ = await User.findOne({ _id: userId })


      if (!user_) {
         let error = new Error("user not found")
         return next(error)
      }

      return res.status(200).json({
         response: user_
      })
   } catch (error) {
      error.message = error.message || "an error occured try later"
      return next(error)

   }
}

module.exports.updateUser = async (req, res, next) => {
   try {
      let {
         fullName,
         patientId,
         dateOfBirth,
         gender,
         contactInfo_phoneNumber,
         contactInfo_email,
         contactInfo_address,
         emergencyContact_name,
         emergencyContact_relationship,
         emergencyContact_phoneNumber,
         allergies,
         chronicConditions,
         pastSurgeries,
         familyMedicalHistory,
         reasonForVisit,
         currentMedications,
         vitals_bloodPressure,
         vitals_bheartRate,
         vitals_btemperature,
         vitals_brespiratoryRate,
         attendingPhysician,
         department,
         labTestResults,
         imagingResults,
         prescribedMedications,
         ongoingTreatments,
         pastVisits_date,
         pastVisits_department,
         pastVisits_doctor,
         upcomingAppointments_date,
         upcomingAppointments_department,
         upcomingAppointments_doctor,
         billingSummary_charges,
         billingSummary_payments,
         billingSummary_outstandingBalance,
         insurance_provider,
         insurance_policyNumber,
         dischargeSummary_diagnosis,
         dischargeSummary_treatmentReceived,
         dischargeSummary_followUpCare,
         postDischargeMedications
      } = req.body;

      let userId = req.params.id;

      let user_ = await User.findOne({ _id: userId });

      if (!user_) {
         let error = new Error("User not found");
         return next(error);
      }

      // Update user fields with the new values from request body, if they exist
      user_.fullName = fullName || user_.fullName;
      user_.patientId = patientId || user_.patientId;
      user_.dateOfBirth = dateOfBirth || user_.dateOfBirth;
      user_.gender = gender || user_.gender;
      user_.contactInfo_phoneNumber = contactInfo_phoneNumber || user_.contactInfo_phoneNumber;
      user_.contactInfo_email = contactInfo_email || user_.contactInfo_email;
      user_.contactInfo_address = contactInfo_address || user_.contactInfo_address;
      user_.emergencyContact_name = emergencyContact_name || user_.emergencyContact_name;
      user_.emergencyContact_relationship = emergencyContact_relationship || user_.emergencyContact_relationship;
      user_.emergencyContact_phoneNumber = emergencyContact_phoneNumber || user_.emergencyContact_phoneNumber;
      user_.allergies = allergies || user_.allergies;
      user_.chronicConditions = chronicConditions || user_.chronicConditions;
      user_.pastSurgeries = pastSurgeries || user_.pastSurgeries;
      user_.familyMedicalHistory = familyMedicalHistory || user_.familyMedicalHistory;
      user_.reasonForVisit = reasonForVisit || user_.reasonForVisit;
      user_.currentMedications = currentMedications || user_.currentMedications;
      user_.vitals_bloodPressure = vitals_bloodPressure || user_.vitals_bloodPressure;
      user_.vitals_bheartRate = vitals_bheartRate || user_.vitals_bheartRate;
      user_.vitals_btemperature = vitals_btemperature || user_.vitals_btemperature;
      user_.vitals_brespiratoryRate = vitals_brespiratoryRate || user_.vitals_brespiratoryRate;
      user_.attendingPhysician = attendingPhysician || user_.attendingPhysician;
      user_.department = department || user_.department;
      user_.labTestResults = labTestResults || user_.labTestResults;
      user_.imagingResults = imagingResults || user_.imagingResults;
      user_.prescribedMedications = prescribedMedications || user_.prescribedMedications;
      user_.ongoingTreatments = ongoingTreatments || user_.ongoingTreatments;
      user_.pastVisits_date = pastVisits_date || user_.pastVisits_date;
      user_.pastVisits_department = pastVisits_department || user_.pastVisits_department;
      user_.pastVisits_doctor = pastVisits_doctor || user_.pastVisits_doctor;
      user_.upcomingAppointments_date = upcomingAppointments_date || user_.upcomingAppointments_date;
      user_.upcomingAppointments_department = upcomingAppointments_department || user_.upcomingAppointments_department;
      user_.upcomingAppointments_doctor = upcomingAppointments_doctor || user_.upcomingAppointments_doctor;
      user_.billingSummary_charges = billingSummary_charges || user_.billingSummary_charges;
      user_.billingSummary_payments = billingSummary_payments || user_.billingSummary_payments;
      user_.billingSummary_outstandingBalance = billingSummary_outstandingBalance || user_.billingSummary_outstandingBalance;
      user_.insurance_provider = insurance_provider || user_.insurance_provider;
      user_.insurance_policyNumber = insurance_policyNumber || user_.insurance_policyNumber;
      user_.dischargeSummary_diagnosis = dischargeSummary_diagnosis || user_.dischargeSummary_diagnosis;
      user_.dischargeSummary_treatmentReceived = dischargeSummary_treatmentReceived || user_.dischargeSummary_treatmentReceived;
      user_.dischargeSummary_followUpCare = dischargeSummary_followUpCare || user_.dischargeSummary_followUpCare;
      user_.postDischargeMedications = postDischargeMedications || user_.postDischargeMedications;

      // Save the updated user
      let savedUser = await user_.save();

      return res.status(200).json({
         response: savedUser
      });

   } catch (error) {
      error.message = error.message || "An error occurred, please try again later.";
      return next(error);
   }
};

