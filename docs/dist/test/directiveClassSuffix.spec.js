"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testHelper_1 = require("./testHelper");
describe('directive-class-suffix', function () {
    describe('invalid directive class suffix', function () {
        it('should fail when directive class is with the wrong suffix', function () {
            var source = "\n              @Directive({\n                selector: 'sgBarFoo'\n              })\n              class Test {}\n                    ~~~~\n            ";
            testHelper_1.assertAnnotated({
                ruleName: 'directive-class-suffix',
                message: 'The name of the class Test should end with the suffix Directive ($$02-03$$)',
                source: source
            });
        });
    });
    describe('valid directive class name', function () {
        it('should succeed when the directive class name ends with Directive', function () {
            var source = "\n            @Directive({\n                selector: 'sgBarFoo'\n            })\n            class TestDirective {}";
            testHelper_1.assertSuccess('directive-class-suffix', source);
        });
    });
    describe('not called decorator', function () {
        it('should not fail when @Directive is not called', function () {
            var source = "\n            @Directive\n            class TestDirective {}";
            testHelper_1.assertSuccess('directive-class-suffix', source);
        });
    });
    describe('valid directive class', function () {
        it('should succeed when is used @Component decorator', function () {
            var source = "\n            @Component({\n                selector: 'sg-foo-bar'\n            })\n            class TestComponent {}";
            testHelper_1.assertSuccess('directive-class-suffix', source);
        });
    });
    describe('valid pipe class', function () {
        it('should succeed when is used @Pipe decorator', function () {
            var source = "\n            @Pipe({\n                selector: 'sg-test-pipe'\n            })\n            class TestPipe {}";
            testHelper_1.assertSuccess('directive-class-suffix', source);
        });
    });
    describe('valid service class', function () {
        it('should succeed when is used @Injectable decorator', function () {
            var source = "\n            @Injectable()\n            class TestService {}";
            testHelper_1.assertSuccess('directive-class-suffix', source);
        });
    });
    describe('valid empty class', function () {
        it('should succeed when the class is empty', function () {
            var source = "\n            class TestEmpty {}";
            testHelper_1.assertSuccess('directive-class-suffix', source);
        });
    });
    describe('changed suffix', function () {
        it('should suceed when different sufix is set', function () {
            var source = "\n            @Directive({\n                selector: 'sgBarFoo'\n            })\n            class TestPage {}";
            testHelper_1.assertSuccess('directive-class-suffix', source, ['Page']);
        });
        it('should fail when different sufix is set and doesnt match', function () {
            var source = "\n            @Directive({\n                selector: 'sgBarFoo'\n            })\n            class TestPage {}\n                  ~~~~~~~~\n            ";
            testHelper_1.assertAnnotated({
                ruleName: 'directive-class-suffix',
                message: 'The name of the class TestPage should end with the suffix Directive ($$02-03$$)',
                source: source,
                options: ['Directive']
            });
        });
        it('should fail when different sufix is set and doesnt match', function () {
            var source = "\n            @Directive({\n                selector: 'sgBarFoo'\n            })\n            class TestDirective {}\n                  ~~~~~~~~~~~~~\n            ";
            testHelper_1.assertAnnotated({
                ruleName: 'directive-class-suffix',
                message: 'The name of the class TestDirective should end with the suffix Page ($$02-03$$)',
                source: source,
                options: ['Page']
            });
        });
    });
});
