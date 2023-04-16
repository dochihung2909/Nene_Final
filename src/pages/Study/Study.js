import classNames from 'classnames/bind'
import styles from './Study.module.scss'

const cx = classNames.bind(styles)

function Study() {
    return (
        <div className={cx('wrapper', 'container')}>
            <div className="row">
                <div className="col-12">
                    <h1>1. Các thì trong Tiếng Anh</h1>
                    <p>
                        Thì (tense) trong Tiếng Anh luôn đi kèm với chủ ngữ và động từ, dùng để chỉ trạng thái của động
                        từ trong một khoảng thời gian nào đó. Các câu trong bài có thể được diễn đạt dưới dạng quá khứ,
                        luôn xảy ra, hoặc những hành động được dự đoán sẽ xảy ra trong tương lai.
                    </p>
                    <p>
                        Để chinh phục thang điểm cao, bạn cần nắm vững và hiểu về các thì trong động từ, công thức cùng
                        những mẹo ghi nhớ. Về cơ bản, Tiếng Anh gồm có 12 thì như sau:
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1>2. Thì quá khứ</h1>
                </div>
                <table>
                    <tr>
                        <th className={cx('time')}>Thời gian</th>
                        <th className={cx('recipe')}>Công thức</th>
                        <th className={cx('usage')}>Cách dùng</th>
                    </tr>
                    <tr>
                        <td>
                            <p>Present Simple(Thì hiện tại đơn)</p>
                        </td>
                        <td>
                            <p>
                                <p>Đối với động từ thường:</p>
                                <strong>S + V (s/es)+ O</strong>
                                <p>Ví dụ: He goes to school.</p>
                                <br></br>
                                <p>Đối với động từ To be:</p>
                                <strong>S + is/am/are + N/Adj </strong>
                                <p>Ví dụ: I am a boy.</p>
                            </p>
                        </td>
                        <td>
                            <p>
                                Thì hiện tại đơn dùng để diễn tả:
                                <p>- Một chân lý, sự thật hiển nhiên.</p>
                                <p>- Diễn tả thói quen, sở thích hoặc một sự việc được lặp đi lặp lại hàng ngày.</p>
                                <p>- Thể hiện kinh nghiệm, khả năng của một cá nhân.</p>
                                <p>
                                    Trong những câu hiện tại đơn, bạn sẽ thấy sự xuất hiện của các trạng từ chỉ tần suất
                                    như : usually, always, often, rarely, never, hoặc là every.
                                </p>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Present Simple(Thì hiện tại đơn)</p>
                        </td>
                        <td>
                            <p>
                                <p>Đối với động từ thường:</p>
                                <strong>S + V (s/es)+ O</strong>
                                <p>Ví dụ: He goes to school.</p>
                                <br></br>
                                <p>Đối với động từ To be:</p>
                                <strong>S + is/am/are + N/Adj </strong>
                                <p>Ví dụ: I am a boy.</p>
                            </p>
                        </td>
                        <td>
                            <p>
                                Thì hiện tại đơn dùng để diễn tả:
                                <p>- Một chân lý, sự thật hiển nhiên.</p>
                                <p>- Diễn tả thói quen, sở thích hoặc một sự việc được lặp đi lặp lại hàng ngày.</p>
                                <p>- Thể hiện kinh nghiệm, khả năng của một cá nhân.</p>
                                <p>
                                    Trong những câu hiện tại đơn, bạn sẽ thấy sự xuất hiện của các trạng từ chỉ tần suất
                                    như : usually, always, often, rarely, never, hoặc là every.
                                </p>
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Study
