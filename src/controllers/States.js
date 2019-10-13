var States={

  topView:null,

  skipIllustrations()
  {
    this.topView.setState({skip: 1});
  },

  loginOrRegister(x)
  {
    this.mainView.setState({flow: x});
  },

}

module.exports={
  States
}
