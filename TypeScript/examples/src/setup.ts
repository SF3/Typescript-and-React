import {sanityCheck} from "./core-language/sanity";
import {showPrimitiveDataTypes} from "./core-language/data-types-primitive";
import {showArrays} from "./core-language/data-types-arrays";
import {showTuples} from "./core-language/data-types-tuples";
import {showSpecialTypes} from "./core-language/data-types-special";
import {showBrowserDataTypes} from "./core-language/browser-data-types";
import {showArrowFunctions} from './core-language/arrows'
import {showBasicClasses} from './core-language/classes-without-parameter-properties'
import {showParameterProperties} from "./core-language/classes-with-parameter-properties";
import {showDecorators} from "./core-language/decorators";
import {showDestructuring} from "./core-language/destructuring-syntax";
import {showDestructuringInParameters} from "./core-language/destructuring-in-parameters";
import {showAdvancedDestructuring} from "./core-language/destructuring-advanced";
import {showEnums} from "./core-language/enums";
import {wrapConsoleDemo} from "./utils";
import {showIteration} from "./core-language/iteration";
import {showFunctionOverloading} from "./core-language/function-overloads";
import {showFunctionDeclarations} from "./core-language/functions";
import {showGeneratorFunctions} from "./core-language/generators";
import {showGenericConstraints} from "./core-language/generic-constraints";
import {showGenerics} from "./core-language/generics";
import {showInterfaces} from "./core-language/interfaces";
import {showTemplateStrings} from "./core-language/template-strings";
import {showModules} from "./modules-demo/modules";
import {showIssuesWithMethods} from "./core-language/arrows-as-methods";
import {structuralTyping} from "./core-language/structural-typing";
import {showGuards} from "./core-language/guards";
import {showSymbols} from "./core-language/symbols";
import {showLiteralTypes} from "./core-language/literal-types";

import 'bootstrap/dist/css/bootstrap.min.css';
import {showTypeAliases} from "./core-language/type-aliases";
import {showUnionTypes} from "./core-language/union-types";
import {showIntersectionTypes} from "./core-language/intersection-types";
import {showBasicMappedTypes} from "./mapped-types/basic-mapped-types";
import {showDistinguishingMethods} from "./mapped-types/methods-verses-fields";
import {showFindingMethodNames} from "./mapped-types/finding-method-names";
import {showManagingReturnTypes} from "./mapped-types/managing-return-types";
import {showTypingHtmlElements} from "./mapped-types/typing-html-elements";
import {showWorkingWithParameters} from "./mapped-types/working-with-params";
import {showPartialApplicationBroken} from "./mapped-types/partial-invocation-broken";
import {showPartialApplicationImproved} from "./mapped-types/partial-invocation-fixed";
import {showPartialInvocationApplied} from "./mapped-types/partial-invocation-applied";
import {showRecursiveTypesWithNumbers} from "./mapped-types/recursive-types-numbers";
import {showRecursiveTypesWithLists} from "./mapped-types/recursive-types-lists";
import {showThisParameters} from "./core-language/this-parameters";
import {showDataStructures} from "./core-language/data-structures";
import {showCollectionPipeline} from "./core-language/collection-pipeline";
import {showPromises} from "./core-language/promises";

export function doSetup() {
    const examples = {
        "sanity": sanityCheck,
        "data-types-primitive": wrapConsoleDemo(showPrimitiveDataTypes, "Primitive Types"),
        "data-types-arrays": wrapConsoleDemo(showArrays, "Using Arrays"),
        "data-types-tuples": wrapConsoleDemo(showTuples, "Using Tuples"),
        "data-types-special": wrapConsoleDemo(showSpecialTypes, "Special Types"),
        "browser-data-types": wrapConsoleDemo(showBrowserDataTypes, "Browser Specific Data Types"),
        "structural-typing": wrapConsoleDemo(structuralTyping, "Structural Typing"),
        "template-strings": wrapConsoleDemo(showTemplateStrings, "Template Strings"),
        "using-symbols": wrapConsoleDemo(showSymbols, "Using Symbols"),
        "enums": wrapConsoleDemo(showEnums, "Enumerations"),
        "guards-and-unions": wrapConsoleDemo(showGuards, "Guards and Unions"),
        "arrows": wrapConsoleDemo(showArrowFunctions, "Arrow Functions"),
        "arrows-as-methods": wrapConsoleDemo(showIssuesWithMethods, "Using Arrows As Methods"),
        "classes": wrapConsoleDemo(showBasicClasses, "Basic Classes"),
        "parameter-properties": wrapConsoleDemo(showParameterProperties, "Parameter Properties"),
        "interfaces": wrapConsoleDemo(showInterfaces, "Interfaces"),
        "destructuring-syntax": wrapConsoleDemo(showDestructuring, "Destructuring Syntax"),
        "destructuring-in-parameters": wrapConsoleDemo(showDestructuringInParameters, "Destructuring in Parameters"),
        "destructuring-advanced": wrapConsoleDemo(showAdvancedDestructuring, "Advanced Destructuring"),
        "decorators": wrapConsoleDemo(showDecorators, "Decorators"),
        "iteration": wrapConsoleDemo(showIteration, "Iteration"),
        "function-overloads": wrapConsoleDemo(showFunctionOverloading, "Function Overloading"),
        "functions": wrapConsoleDemo(showFunctionDeclarations, "Function Declarations"),
        "collection-pipeline": wrapConsoleDemo(showCollectionPipeline, "Collection Pipelines"),
        "this-parameters": wrapConsoleDemo(showThisParameters, "This Parameters"),
        "generators": wrapConsoleDemo(showGeneratorFunctions, "Generator Functions"),
        "generics": wrapConsoleDemo(showGenerics, "Generics"),
        "data-structures": wrapConsoleDemo(showDataStructures, "Data Structures"),
        "generic-constraints": wrapConsoleDemo(showGenericConstraints, "Generic Constraints"),
        "promises": wrapConsoleDemo(showPromises, "Promises"),
        "type-aliases": wrapConsoleDemo(showTypeAliases, "Type Aliases"),
        "literal-types": wrapConsoleDemo(showLiteralTypes, "Literal Types"),
        "union-types": wrapConsoleDemo(showUnionTypes, "Union Types"),
        "intersection-types": wrapConsoleDemo(showIntersectionTypes, "Intersection Types"),
        "modules": wrapConsoleDemo(showModules, "Modules"),
        "basic-mapped-types": wrapConsoleDemo(showBasicMappedTypes, "Basic Mapped Types"),
        "distinguish-methods": wrapConsoleDemo(showDistinguishingMethods, "Distinguishing Methods"),
        "finding-method-names": wrapConsoleDemo(showFindingMethodNames, "Finding Method Methods"),
        "managing-return-types": wrapConsoleDemo(showManagingReturnTypes, "Managing Return Types"),
        "typing-html-elements": wrapConsoleDemo(showTypingHtmlElements, "Typing HTML Elements"),
        "working-with-params": wrapConsoleDemo(showWorkingWithParameters, "Working With Parameters"),
        "typing-partial-invocation": wrapConsoleDemo(showPartialApplicationBroken, "Typing Partial Invocation (Broken)"),
        "partial-invocation-improved": wrapConsoleDemo(showPartialApplicationImproved, "Typing Partial Invocation (Fixed)"),
        "partial-invocation-applied": wrapConsoleDemo(showPartialInvocationApplied, "Partial Invocation (Applied)"),
        "recursive-types-numbers": wrapConsoleDemo(showRecursiveTypesWithNumbers, "Recursive Types (Numbers)"),
        "recursive-types-lists": wrapConsoleDemo(showRecursiveTypesWithLists, "Recursive Types (Numbers)")
    };

    for (const [name, func] of Object.entries(examples)) {
        const handler = ({target}) => {
            const output = func();
            if (!target.innerHTML.endsWith(output)) {
                target.innerHTML = `${target.innerHTML}  ${output}`;
            }
        }

        let bullet = document.getElementById(name);
        if (bullet === null) {
            console.log(`Could not add listener for ${name}`);
        } else {
            bullet.onclick = handler;
        }
    }
}
