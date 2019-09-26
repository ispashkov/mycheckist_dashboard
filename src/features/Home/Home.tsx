import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Typography, Button } from '@material-ui/core'
import { LanguageType } from 'types'

class Home extends Component<WithTranslation, {}> {
  handleChangeLang = (lang: LanguageType) => async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): Promise<void> => {
    const { i18n } = this.props

    await i18n.changeLanguage(lang)
  }

  render(): JSX.Element {
    const { t } = this.props
    return (
      <div>
        <Typography variant="h4">{t('home.title')}</Typography>

        <div>
          <Button onClick={this.handleChangeLang('ru')}>RU</Button>
          <Button onClick={this.handleChangeLang('en')}>EN</Button>
        </div>
      </div>
    )
  }
}

export default withTranslation()(Home)
