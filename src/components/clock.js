import React from "react";
import styled from "styled-components";

class Clock extends React.Component {
    state = {
        date: new Date()
    }
    render() {
        const { date } = this.state;

        return (
            <Container>
                <CurDate>
                    {date.getFullYear()}&nbsp;/&nbsp;
                    {date.getMonth() + 1}&nbsp;/&nbsp;
                    {date.getDate()}
                </CurDate>
                <CurDay>
                    {
                        date.getDay() === 0 ? "일요일" :
                            date.getDay() === 1 ? "월요일" :
                                date.getDay() === 2 ? "화요일" :
                                    date.getDay() === 3 ? "수요일" :
                                        date.getDay() === 4 ? "목요일" :
                                            date.getDay() === 5 ? "금요일" :
                                                "토요일"
                    }
                </CurDay>
                <CurTime>
                    {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}&nbsp;:&nbsp;
                    {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
                </CurTime>
            </Container>
        );
    }

    getDate = () => {
        this.setState({
            date: new Date()
        });
    };

    // 화면에 전부 그려졌을 때 실행
    componentDidMount() {
        this.oneMinuteCall = setInterval(() => this.getDate(), 60000);
    }

    // 사라지기 직전에 호출
    componentWillUnmount() {
        clearInterval(this.oneMinuteCall);
    }
}

const Container = styled.div`
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const CurDate = styled.div`
  font-size: 24px;
`;

const CurDay = styled.div`
  font-style: italic;
`;

const CurTime = styled.div`
  font-size: 55px;
  font-weight: 600;
`;
export default Clock;
