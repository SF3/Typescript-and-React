// TypeScript supports automatic narrowing
import {cow, Cow, Mammal, Oviparous} from "./animals";

type Animal = Mammal | Oviparous;

export function showGuards() {
    const creature1: Mammal | null = getCow();

    // Invalid as type may be null
    // creature3.produceMilk();

    console.log("Type Guard using null check");
    if (creature1 != null) {
        creature1.produceMilk();
    }

    console.log("Type Guard using instanceof");
    if (creature1 instanceof Cow) {
        creature1.produceMilk();
    }


    // --------------------------------------------------
    // Custom Type Guard allows compiler narrowing
    function isMammal(creature: Animal): creature is Mammal {
        return (<Mammal>creature).produceMilk !== undefined;
    }

    const creature2: Animal = cow as Animal;
    console.log("Type Guard using custom guard");
    if (isMammal(creature2)) {
        creature2.produceMilk(); // Narrowed to mammal
    } else {
        creature2.layEggs(); // Must be EggLayer if not mammal
    }

    // --------------------------------------------------
    // The in operator will work as type guard
    console.log("Type Guard using 'in' keyword");
    if ('layEggs' in creature2) {
        creature2.layEggs(); // Narrowed to EggLayer
    } else {
        creature2.produceMilk(); // Must be mammal
    }
}

function getCow(): Mammal | null {
    return cow;
}
