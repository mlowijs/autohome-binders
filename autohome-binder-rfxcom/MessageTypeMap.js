
class MessageType {
    static fromId(id) {
        return MessageType.typeMap.get(id);
    }

    static fromString(typeString) {
        typeString = typeString.toLowerCase();

        for (const [id, type] in MessageType.typeMap) {
            if (type === typeString)
                return id;
        }

        return undefined;
    }
}

MessageType.typeMap = new Map();

module.exports = MessageType;