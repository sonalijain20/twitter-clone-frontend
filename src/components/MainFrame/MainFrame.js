import React from 'react'

export const MainFrame = () => {
    return (
        <div>
            <Layout className="layout">
                {localStorage.getItem("isUserAuthenticated") === "true" ? (
                    <NavBar />
                ) : (
                    <div></div>
                )}
                <Content style={{ padding: "0 50px" }}>
                    <div className="site-layout-content">
                        {/* Route Your Components here  */}

                        <Switch>
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/usersList" component={Users} />
                            <Route exact path="/tasks" component={TaskFrame} />
                            <Route exact path="/places" component={PlaceFrame} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={() => <Signup />} />
                            <Route
                                exact
                                path="/termsAndConditions"
                                component={() => <TermsAndConditions />}
                            />
                            <Route
                                exact
                                path="/searchplaces"
                                component={() => <MyMapComponent />}
                            />
                            <Route
                                exact
                                path="/savedPlaces"
                                component={() => <SavedPlaces />}
                            />
                            <Route exact path="/taskGrid" component={() => <TaskGrid />} />
                            <Route
                                exact
                                path="/completedTasks"
                                component={() => <CompletedTasks />}
                            />
                            <Route component={Login} />
                        </Switch>
                    </div>
                </Content>
            </Layout>
        </div>
    );
}
