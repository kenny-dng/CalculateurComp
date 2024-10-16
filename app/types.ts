export interface InputProps {
    fixedSalary: number;
    variablePerMeeting: number;
    boosterAmount: number;
    accelerator: number;
    decelerator: number;
    averageSalePrice: number;
    monthlyTargetMeetings: number;
    closingRate: number;
}

export interface PerformanceProps {
    meetingsHeld: number;
    salesMade: number;
}