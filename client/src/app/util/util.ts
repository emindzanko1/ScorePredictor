import Swal from "sweetalert2";
import { Prediction } from "../_models/prediction";

export function formatDate(dateTime: string): string {
    const date = new Date(dateTime);
    return `${padTo2Digits(date.getDate())}.${padTo2Digits(date.getMonth() + 1)}.${date.getFullYear().toString().slice(-2)}`;
}

export function formatTime(dateTime: string): string {
    const date = new Date(dateTime);
    return `${padTo2Digits(date.getHours())}:${padTo2Digits(date.getMinutes())}`;
}

export function validatePrediction(prediction: Prediction, id: number, newId: number): boolean {
    const hasSixOutcomes = prediction.outcomes.length === 6 && prediction.outcomes.every(outcome => ['1', 'X', '2'].includes(outcome));
    const allResultsValid = prediction.results.every(result =>
        result.trim() === '' || /^\d+\s*:\s*\d+$/.test(result.trim())
    );
    const nonEmptyResultsCount = prediction.results.filter(result => result.trim() !== '').length;
    const hasOneResult = nonEmptyResultsCount === 1;
    const hasOneScorer = prediction.playerId !== 0;
    return hasSixOutcomes && allResultsValid && hasOneResult && hasOneScorer && id <= newId;
}

function padTo2Digits(num: number): string {
    return num.toString().padStart(2, '0');
}

export function sweetSuccess(message: string, title: string = 'Success!'): void {
    Swal.fire({
        title: title,
        text: message,
        icon: 'success',
        timer: 3000
    });
}

export function sweetError(message: string, title: string = 'Error!'): void {
    Swal.fire({
        title: title,
        text: message,
        icon: 'error',
        timer: 3000
    });
}