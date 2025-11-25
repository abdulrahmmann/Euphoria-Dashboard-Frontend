import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilePicService {

  public getStyles(accountName: string): string {
    const firstLetter = (accountName?.trim().charAt(0).toLowerCase() || '');

    if (firstLetter >= 'a' && firstLetter <= 'f') {
      return 'size-full shadow-sm rounded-full flex items-center justify-center font-semibold text-base bg-green-400 border-[1.5px] border-green-700 text-green-900';
    } else if (firstLetter >= 'g' && firstLetter <= 'k') {
      return 'size-full shadow-sm rounded-full flex items-center justify-center font-semibold text-base bg-teal-400 border-[1.5px] border-teal-700 text-teal-900';
    } else if (firstLetter >= 'l' && firstLetter <= 'p') {
      return 'size-full shadow-sm rounded-full flex items-center justify-center font-semibold text-base bg-sky-400 border-[1.5px] border-sky-700 text-sky-900';
    } else if (firstLetter >= 'q' && firstLetter <= 'u') {
      return 'size-full shadow-sm rounded-full flex items-center justify-center font-semibold text-base bg-violet-400 border-[1.5px] border-violet-700 text-violet-900';
    } else if (firstLetter >= 'v' && firstLetter <= 'z') {
      return 'size-full shadow-sm rounded-full flex items-center justify-center font-semibold text-base bg-fuchsia-400 border-[1.5px] border-fuchsia-700 text-fuchsia-900';
    } else {
      return 'size-full shadow-sm rounded-full flex items-center justify-center font-semibold text-base bg-gray-400 border-[1.5px] border-gray-700 text-gray-900';
    }
  }
}
