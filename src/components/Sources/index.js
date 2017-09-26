import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSources } from '../../actions/sources'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import SourcesFrame from './SourcesFrame'

import { colors } from '../../themes'

class Sources extends Component {
  componentWillMount () {
    this.props.getSources('business')
    this.props.getSources('politics')
    this.props.getSources('technology')
  }

  render () {
    return (
      <ScrollableTabView
        tabBarBackgroundColor={colors.primary.normal}
        tabBarActiveTextColor='rgba(255,255,255,0.87)'
        tabBarInactiveTextColor='rgba(255,255,255,0.79)'
        tabBarUnderlineStyle={{
          backgroundColor: 'rgba(255,255,255,0.87)',
          height: 2
        }}
      >
        <SourcesFrame
          tabLabel='Business'
          sources={this.props.businessSources}
          loading={this.props.businessLoading}
        />
        <SourcesFrame
          tabLabel='Politics'
          sources={this.props.politicsSources}
          loading={this.props.politicsLoading}
        />
        <SourcesFrame
          tabLabel='Technology'
          sources={this.props.technologySources}
          loading={this.props.technologyLoading}
        />
      </ScrollableTabView>
    )
  }
}

Sources.navigationOptions = {
  title: 'News App'
}

function mapStateToProps (state) {
  return {
    businessSources: state.businessSources.sources,
    businessLoading: state.businessSources.loading,
    politicsSources: state.politicsSources.sources,
    politicsLoading: state.politicsSources.loading,
    technologySources: state.technologySources.sources,
    technologyLoading: state.technologySources.loading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getSources: (category) => dispatch(getSources(category))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sources)
