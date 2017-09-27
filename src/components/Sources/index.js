import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSources } from '../../actions/sources'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import SourcesFrame from './SourcesFrame'

import { colors } from '../../themes'

class Sources extends Component {
  componentWillMount () {
    this.props.getSources('business')
  }

  render () {
    const {
      getSources,
      businessSources, businessLoading,
      politicsSources, politicsLoading,
      technologySources, technologyLoading
    } = this.props

    return (
      <ScrollableTabView
        tabBarBackgroundColor={colors.primary.normal}
        tabBarActiveTextColor={colors.white87}
        tabBarInactiveTextColor={colors.white79}
        tabBarUnderlineStyle={{
          backgroundColor: colors.white87,
          height: 2
        }}
        onChangeTab={(event) => {
          switch (event.i) {
            case 0:
              if (businessSources.length === 0 && !businessLoading) {
                getSources('business')
              }
              break
            case 1:
              if (politicsSources.length === 0 && !politicsLoading) {
                getSources('politics')
              }
              break
            case 2:
              if (technologySources.length === 0 && !technologyLoading) {
                getSources('technology')
              }
              break
          }
        }}
      >
        <SourcesFrame
          tabLabel='Business'
          sources={businessSources}
          loading={businessLoading}
        />
        <SourcesFrame
          tabLabel='Politics'
          sources={politicsSources}
          loading={politicsLoading}
        />
        <SourcesFrame
          tabLabel='Technology'
          sources={technologySources}
          loading={technologyLoading}
        />
      </ScrollableTabView>
    )
  }
}

Sources.navigationOptions = {
  title: 'News App'
}

function mapStateToProps ({
  businessSources, businessLoading,
  politicsSources, politicsLoading,
  technologySources, technologyLoading
}) {
  return {
    businessSources: businessSources.sources,
    businessLoading: businessSources.loading,
    politicsSources: politicsSources.sources,
    politicsLoading: politicsSources.loading,
    technologySources: technologySources.sources,
    technologyLoading: technologySources.loading
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
