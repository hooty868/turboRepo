import moment, { MomentInput } from 'moment';

export enum EDayjsFormat {
    FULL_DATETIME = 'YYYY-MM-DD HH:mm:ss',
    DATE_HOUR_MINUTE = 'YYYY-MM-DD HH:mm',
    DATE_HOUR = 'YYYY-MM-DD HH',
    DATE = 'YYYY-MM-DD',
    MONTH_DASH = 'YYYY-MM',
    YEAR = 'YYYY',
    TIME = 'HH:mm:ss',
    HOUR_MINUTE = 'HH:mm',
}

export const formatDateTime = (
    timestampOrDate: MomentInput,
    format: string = EDayjsFormat.FULL_DATETIME,
): string => {
    return moment(timestampOrDate).format(format) as string;
};
