import {connect} from 'react-redux';
import {IntlProvider, addLocaleData} from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import lu from 'react-intl/locale-data/lu';
import locales from './locales';

// add support for custom messages
addLocaleData(ru);
addLocaleData(lu);

function mapStateToProps(state) {
  const {language} = state.settings;
  return {locale: language, key: language, messages: locales[language]};
}

export default connect(mapStateToProps)(IntlProvider);
