import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Exam from './pages/Exam/Exam'
import Quiz from './pages/Quiz/Quiz'
import Content from './layouts/Content'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Result from './pages/Result/Result'
import Grammar from './pages/Grammar/Grammar'
import Study from './pages/Study/Study'

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <Content></Content>
                        </DefaultLayout>
                    }
                ></Route>
                <Route path="/test" element={<Exam></Exam>}></Route>

                <Route
                    path="/quiz"
                    element={
                        <DefaultLayout>
                            <Quiz></Quiz>
                        </DefaultLayout>
                    }
                ></Route>

                <Route
                    path="/result"
                    element={
                        <DefaultLayout>
                            <Result></Result>
                        </DefaultLayout>
                    }
                ></Route>

                <Route
                    path="/study"
                    element={
                        <DefaultLayout>
                            <Content>
                                <Study></Study>
                            </Content>
                        </DefaultLayout>
                    }
                ></Route>

                <Route
                    path="/study/grammar"
                    element={
                        <DefaultLayout>
                            <Content>
                                <Grammar></Grammar>
                            </Content>
                        </DefaultLayout>
                    }
                ></Route>
            </Routes>
        </Router>
    )
}

export default App
