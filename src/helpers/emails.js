// src/helpers/emails.js
import emailjs from "@emailjs/browser";

const _status = {
    didInit: false,
    config: null
};
export const useEmails = () => {
    /**
     * Initialize EmailJS with Basit's configuration
     * @param {Object} config - Optional override, but defaults to Basit's keys
     */
    const init = (config = {}) => {
        const defaultConfig = {
            publicKey: '0gaqaBlrVbiYYMWSh',    // Your Public Key
            serviceId: 'service_vofk0ie',      // Your Service ID
            templateId: 'template_njm6cyf'     // Your Template ID
        };
        const finalConfig = { ...defaultConfig, ...config };
        
        emailjs.init(finalConfig.publicKey); // Initialize with your Public Key
        _status.config = finalConfig;
        _status.didInit = true;
    };
// export const useEmails = () => {
//     /**
//      * Initialize EmailJS with configuration
//      * @param {Object} config - Contains publicKey, serviceId, and templateId
//      */
//     const init = (config) => {
//         emailjs.init(config.publicKey); // Initialize EmailJS with your public key
//         _status.config = config;
//         _status.didInit = true;
//     };

    /**
     * Check if EmailJS is initialized
     * @return {boolean}
     */
    const isInitialized = () => {
        return _status.didInit;
    };

    /**
     * Send a contact email to basitaliyousafzai786@gmail.com
     * @param {string} fromName - Sender's name
     * @param {string} fromEmail - Sender's email
     * @param {string} customSubject - Subject of the email
     * @param {string} message - Message content
     * @return {Promise<boolean>} - True if successful, false if failed
     */
    const sendContactEmail = async (fromName, fromEmail, customSubject, message) => {
        if (!isInitialized()) {
            console.error("EmailJS not initialized. Call init() with config first.");
            return false;
        }

        const params = {
            from_name: fromName,
            from_email: fromEmail,
            custom_subject: customSubject,
            message: message,
            to_email: "basitaliyousafzai786@gmail.com" // Explicitly set your Gmail as recipient
        };

        try {
            const response = await emailjs.send(
                _status.config['serviceId'],   // Your EmailJS Service ID
                _status.config['templateId'],  // Your EmailJS Template ID
                params                          // Parameters to fill the template
            );
            console.log("Email sent successfully:", response);
            return true;
        } catch (error) {
            console.error("Failed to send email:", error);
            return false;
        }
    };

    return {
        init,
        isInitialized,
        sendContactEmail
    };
};