export class UrlHelpers {

    public static getAllParams = (params: string) => {

        if (params.length) {
            const listOfParams = params.slice(1).replaceAll('=', ':').split('&');

            const obj: { [key: string]: string } = {};

            for (const param of listOfParams) {

                const [key, value] = param.split(':');

                obj[key] = value;
            }

            return obj;
        }

        return undefined;
    };
}