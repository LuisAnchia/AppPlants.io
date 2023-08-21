import { svgs } from '/js/constants.js';
import { CreateDivElementWithContent } from '/js/utils.js';

export default class StoreElements {
    constructor(title, content, show, htmlId) {
        this.title = title;
        this.content = content;
        this.show = show;
        this.htmlId = htmlId;
        this.arrowImgId = `arrow-img-${this.htmlId}`;
        this.contentId = `content-${this.htmlId}`;
    }

    SetContent(content) {
        this.content = content;
    }

    GetDiv() {
        const _ = CreateDivElementWithContent(/* html */ `<div>
            <div class="container-accordion" id="${this.htmlId}">
                <div class="container-accordion-text">${this.title}</div>
                <div class="container-accordion-arrow">
                    <img
                    id="${this.arrowImgId}"
                    src="${svgs.ARROW}" 
                    alt="arrow.svg"
                    >
                </div>
            </div>
            <br>
            <span id="${this.contentId}" ${this.show === true ? '' : 'class="invisible"'}>
                ${this.content}
            </span>
        </div>
        <hr>`);
        _.querySelector(`#${this.arrowImgId}`).classList.add('arrow');
        this.show === true
            ? _.querySelector(`#${this.arrowImgId}`).classList.add('arrow-up')
            : _.querySelector(`#${this.arrowImgId}`).classList.add('arrow-down');
        return _;
    }
}
