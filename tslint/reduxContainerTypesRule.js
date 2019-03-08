"use strict";
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Lint = require("tslint");
/**
 * The walker takes care of all the work.
 */
var NoImportsWalker = /** @class */ (function (_super) {
    tslib_1.__extends(NoImportsWalker, _super);
    function NoImportsWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if the file needs container types
     */
    NoImportsWalker.prototype.visitSourceFile = function (node) {
        var MapStateType = 'IContainerStateProps';
        var MapDispatchType = 'IContainerDispatchProps';
        var text = node.text;
        /**
         * Does the content have an error
         */
        var hasError = function () {
            if (!text.includes('react-redux'))
                return false;
            if (!text.includes('connect'))
                return false;
            if (!text.includes('connect<'))
                return true;
            if (text.includes('mapState')) {
                if (!text.includes(MapStateType))
                    return true;
            }
            if (text.includes('mapDispatch')) {
                if (!text.includes(MapDispatchType))
                    return true;
            }
            return false;
        };
        if (hasError()) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), "\nRedux containers must include\n\nconnect<" + MapStateType + ", " + MapDispatchType + ">(...\n\nIf they map state or dispatch\n"));
        }
        // call the base version of this visitor to actually parse this node
        _super.prototype.visitSourceFile.call(this, node);
    };
    return NoImportsWalker;
}(Lint.RuleWalker));
/**
 * The actual rule
 */
var Rule = /** @class */ (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Apply the rule
     */
    Rule.prototype.apply = function (sourceFile) {
        var walker = new NoImportsWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
