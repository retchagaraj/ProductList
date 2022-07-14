import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    message: {
        type: String
      },
      phoneNumber: {
        type: String
      },
      emailAddress: {
        type: String
      },
      location: {
        type: String
      },
      workingHours: {
        type: String
      },
      status: {
        type: String,
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE', 'DELETED']
      }
})

const ContactList = mongoose.model('feature_contacts', contactSchema)

export default ContactList;
