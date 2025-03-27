import { fetchAPI } from "."

export interface IPayloadEmail {
    name: string;
    email: string;
    subject?: string;
    message: string;
    sendTo?: string;
}
export const sendEmail = async (payload: IPayloadEmail) => {
    return await fetchAPI('/emails/send', 'POST', payload);
}
