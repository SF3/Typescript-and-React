import {defineMessages, MessageDescriptor} from "react-intl";

const codeMessages = defineMessages({
    msg1: {
        id: 'i18nExample.codeExample',
        defaultMessage: 'This is read from code'
    }
});

export function readMessageFromCode(): MessageDescriptor {
    return codeMessages.msg1;
}
