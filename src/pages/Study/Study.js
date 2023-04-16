import classNames from 'classnames/bind'
import Grammar from '~/components/Grammar'
import styles from './Study.module.scss'

const cx = classNames.bind(styles)

function Study() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-wrap')}>
                <div className={cx('header')}>
                    <h1>Ngữ pháp IELTS</h1>
                    <p>
                        Tổng hợp Các điểm ngữ pháp IELTS Grammar quan trọng & tư duy học. Hướng dẫn cách học, ví dụ minh
                        họa, bài tập kèm đáp án & file dowload PDF miễn phí giúp bạn nâng cao band điểm Writing,
                        Speaking và Reading.
                    </p>
                    <div className={cx('badge', 'badge-1')}>
                        <svg width="68" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.267 7.66c1.73.586 3.641.772 5.46.639 3.815-.28 9.064-2.132 11.847-5.407.66-.777 2.661-.736 3.224.112.65.98 1.499 1.915 2.625 2.786 5.99 4.635 13.017 2.99 16.257-3.007.415-.768 1.6-.86 2.081-.133 1.244 1.881 2.764 3.564 4.768 4.946 6.454 4.449 13.742.612 17.59-5.17"
                                stroke="#7569BB"
                                stroke-width="3"
                                stroke-miterlimit="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </div>
                    <div className={cx('badge', 'badge-2')}>
                        <svg width="57" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30.496 15.111c-1.332-4.576-4.11-7.871-7.592-10.683a15.928 15.928 0 0 0-4.934-2.709C13.842.323 9.65.212 5.522 1.214c-2.468.603-4.385 1.952-5.107 4.56-.095.368-.198.748-.208 1.121-.033.961.646 1.671 1.659 1.671.463-.002.926-.196 1.419-.3.537-.833-.256-1.946.65-2.69.842-.7 1.756-1.18 2.82-1.37 3.9-.704 7.81-.677 11.533 1.071 3.723 1.749 6.378 4.685 8.28 8.294.09.164.075.379.09.578-.002.085-.037.165-.088.355a90.74 90.74 0 0 0-2.56.25c-2.135.254-4.199.781-6.046 1.883-3.462 2.064-4.572 5.33-3.15 9.241a13.69 13.69 0 0 0 2.952 4.79c1.746 1.867 3.942 2.705 6.395 2.592 2.653-.118 4.56-1.422 5.553-3.901.865-2.169 1.239-4.457 1.28-6.81.019-1.074.041-2.129.058-3.394 2.995.368 5.398 2.015 7.88 3.319 3.006 1.565 6.589 5.24 8.481 8.394-.963.309-1.911-.149-2.8-.066-.855.087-1.727.198-2.532.457-.609.2-.75.83-.605 1.461.132.623.483 1.097 1.164 1.17.78.087 1.564.056 2.344.195 2.82.475 5.61 1.052 8.197 2.442.264.142.529.283.804.38.71.247 1.38.174 1.893-.347.522-.534.51-1.232.185-1.913-.624-1.346-1.345-2.653-1.921-4.02-.882-2.103-1.607-4.258-1.584-6.554a3.537 3.537 0 0 0-.094-.874c-.183-.984-.716-1.562-1.474-1.6-.77-.045-1.456.413-1.7 1.287-.18.639-.201 1.332-.247 2.01-.045.538-.046 1.09-.074 2.071-2.81-2.918-5.22-5.71-8.477-7.493-3.186-1.754-6.433-3.22-9.996-4.363Zm-2.843 2.977c.338 2.811.406 5.323-.178 7.8-.2.833-.447 1.686-.832 2.448-.862 1.722-2.124 2.247-4.09 1.907-1.328-.227-2.45-.886-3.212-1.962-.675-.965-1.315-2.011-1.72-3.091-1-2.666-.286-4.572 2.146-5.837 2.343-1.238 4.898-1.646 7.886-1.265Z"
                                fill="#5D9F78"
                            ></path>
                        </svg>
                    </div>

                    <div className={cx('badge', 'badge-3')}>
                        <svg width="29" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.543 30c-1.131.029-2.054-.658-2.173-1.523-.09-.687-.09-1.388-.075-2.075.09-3-1.414-5.328-3.14-7.537-.76-.97-1.906-1.418-3.156-1.448-1.087-.03-2.188-.015-3.275-.03-.49-.015-.997-.015-1.473-.119-.64-.134-1.236-.88-1.25-1.508-.015-.656.327-1.194.893-1.417 1.473-.568 2.947-1.18 4.48-1.523 3.185-.716 4.837-2.925 5.865-5.76.223-.598.089-1.344.074-2.016-.03-1.283-.149-2.567-.104-3.85.015-.627.476-1.09 1.146-1.18.67-.089 1.19.24 1.429.821.387 1 .803 2.03.997 3.09.997 5.268 5.79 9.03 11.149 8.686.49-.03.982-.149 1.473-.119.61.03 1.176.298 1.43.91.297.702.208 1.418-.343 1.926a3.738 3.738 0 0 1-1.518.85c-4.079 1.075-6.803 3.94-9.318 7.03-.64.791-.79 2-1.131 3.03-.298.94-.447 1.94-.864 2.82-.193.448-.833.717-1.116.941Zm5.7-14.434c-1.339-.88-2.53-1.552-3.601-2.373-1.057-.82-2.01-1.79-3.052-2.746L9.81 14.85c1.89 1.18 2.962 2.836 3.989 4.537.283.463.7.836 1.146 1.358.967-1 1.786-1.85 2.634-2.686.849-.82 1.712-1.597 2.665-2.493Z"
                                fill="#FFAD4C"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className={cx('body', 'container')}>
                <div className="row">
                    <div className={cx('col-12', 'grammar')}>
                        <Grammar
                            thumb="https://suijm9clouobj.vcdn.cloud/PUBLIC/MEDIA/6a085a61-95eb-482c-b22c-9c2b868ea831.jpeg"
                            title="Dấu hiệu nhận biết thì hiện tại đơn, cấu trúc và cách sử dụng"
                            description="Trên thực tế thì hiện tại đơn là kiến thức ngữ pháp cơ bản nhất mà ai cũng cần nắm được khi bắt đầu học tiếng Anh. Theo đó, Present Simple được sử dụng phổ biến trong 12 thì với việc áp dụng thường xuyên trong cả văn nói và cả văn viết. Chính vì thế việc học và nắm được cách sử dụng của Present Simple cực kỳ quan trọng nhằm nâng cao khả năng tiếng Anh. "
                        ></Grammar>
                    </div>
                    <div className={cx('col-12', 'grammar')}>
                        <Grammar
                            thumb="https://images.dolenglish.vn/rs:auto:::0/w:1440/q:30/aHR0cHM6Ly9zdWlqbTljbG91b2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBLzE4NjZhNjhhLThhMmMtNGQwOS1iNDM0LTIwNDNlZTQ1MThiYy5qcGc="
                            title="Cách dùng động từ “illustrate” tiếng Anh bạn nên biết"
                            description='Trong bài thi IELTS, đặc biệt là Writing, động từ “illustrate” thường xuyên xuất hiện. Theo đó, trong tiếng Anh, động từ này cũng được sử dụng cho nhiều nghĩa khác nhau. Do đó, trong bài viết này, DOL English sẽ phân tích Cách dùng động từ"illustrate"tiếng Anh nhằm giúp bạn đọc nắm rõ và sử dụng từ vựng này hiệu quả hơn.'
                        ></Grammar>
                    </div>
                    <div className={cx('col-12', 'grammar')}>
                        <Grammar
                            thumb="https://suijm9clouobj.vcdn.cloud/PUBLIC/MEDIA/9e70720b-0f91-4262-af81-bf9f2be94d1c.jpeg"
                            title="Cách sử dụng trạng từ trong tiếng Anh bạn nên biết"
                            description="Trạng từ là một điểm ngữ pháp quan trọng trong tiếng Anh mà bất kỳ người học nào cũng cần nắm được. Vậy thì dùng trạng từ như thế nào đúng cách và tự nhiên nhất? Đây cũng là thắc mắc của rất nhiều bạn đọc hiện nay. Do đó trong bài viết này DOL English sẽ tổng hợp cho bạn cách dùng trạng từ cũng như gợi ý một số trạng từ phổ biến được sử dụng trong bài thi IELTS."
                        ></Grammar>
                    </div>
                    <div className={cx('col-12', 'grammar')}>
                        <Grammar
                            thumb="https://suijm9clouobj.vcdn.cloud/PUBLIC/MEDIA/3d942c74-fdf6-4f4c-ab11-1b7d3ac6dc93.jpg"
                            title="Những mẫu câu Tiếng Anh cho người đi làm thường sử dụng"
                            description="Đừng để tiếng Anh trở thành rào cản trên con đường “thăng quan tiến chức” của bạn nơi công sở! Bạn đã thực hiện tốt những kỹ năng cơ bản như giao tiếp bằng tiếng Anh, email bằng tiếng Anh? Nhưng để sử dụng tiếng Anh cho người đi làm vừa thân thiện gần gũi, vừa chuyên nghiệp lịch sự đúng mực cũng không đơn giản chút nào. Đừng lo, những mẫu câu tiếng Anh cho người đi làm cực bổ ích dưới đây sẽ giúp bạn tự tin trong giao tiếp và làm việc nơi công sở mỗi ngày. XEM THÊM: Lớp phát âm tại Dol English có gì khác?"
                        ></Grammar>
                    </div>
                    <div className={cx('col-12', 'grammar')}>
                        <Grammar
                            thumb="https://images.dolenglish.vn/rs:auto:::0/w:1440/q:30/aHR0cHM6Ly9zdWlqbTljbG91b2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBLzE4NjZhNjhhLThhMmMtNGQwOS1iNDM0LTIwNDNlZTQ1MThiYy5qcGc="
                            title="Cách dùng động từ “illustrate” tiếng Anh bạn nên biết"
                            description="Trạng từ là một điểm ngữ pháp quan trọng trong tiếng Anh mà bất kỳ người học nào cũng cần nắm được. Vậy thì dùng trạng từ như thế nào đúng cách và tự nhiên nhất? Đây cũng là thắc mắc của rất nhiều bạn đọc hiện nay. Do đó trong bài viết này DOL English sẽ tổng hợp cho bạn cách dùng trạng từ cũng như gợi ý một số trạng từ phổ biến được sử dụng trong bài thi IELTS."
                        ></Grammar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Study
