import {FpBasicsExercise} from "./fp-basics/FpBasicsExercise";
import {RomanNumeralsEasyExercise} from "./roman-numerals-easy/RomanNumeralsEasyExercise";
import {RomanNumeralsHardExercise} from "./roman-numerals-hard/RomanNumeralsHardExercise";
import {AsyncAwaitExercise} from "./async-await/AsyncAwaitExercise";
import {RxExercise} from "./rx/AsyncAwaitExercise";
import {CinemaExercise} from "./cinema/CinemaExercise";
import {PalindromesExercise} from "./palindromes/PalindromesExercise";
import {UniqueWordsExercise} from "./unique-words/UniqueWordsExercise";
import {DiamondsExercise} from "./diamonds/DiamondsExercise";
import {NumberConverterExercise} from "./number-converter/NumberConverterExercise";
import {TrickyReductionsExercise} from "./tricky-reductions/TrickyReductionsExercise";
import {RefactoringExercise} from "./refactoring/RefactoringExercise";
import {PokerHandsExercise} from "./poker/PokerHandsExercise";

export const routes = [
    {path: '/fp-basics', component: FpBasicsExercise, title: "FP Basics"},
    {path: '/palindromes', component: PalindromesExercise, title: "Palindromes"},
    {path: '/roman-numerals-easy', component: RomanNumeralsEasyExercise, title: "Roman Numerals Easy"},
    {path: '/roman-numerals-hard', component: RomanNumeralsHardExercise, title: "Roman Numerals Hard"},
    {path: '/unique-words', component: UniqueWordsExercise, title: "Unique Words"},
    {path: '/diamonds', component: DiamondsExercise, title: "Diamonds"},
    {path: '/number-converter', component: NumberConverterExercise, title: "Number Converter"},
    {path: '/tricky-reductions', component: TrickyReductionsExercise, title: "Tricky Reductions"},
    {path: '/refactoring', component: RefactoringExercise, title: "Refactoring"},
    {path: '/cinema', component: CinemaExercise, title: "Cinema"},
    {path: '/async-await', component: AsyncAwaitExercise, title: "Async Await"},
    {path: '/rx', component: RxExercise, title: "RX"},
    {path: '/poker', component: PokerHandsExercise, title: "Poker"},
];
