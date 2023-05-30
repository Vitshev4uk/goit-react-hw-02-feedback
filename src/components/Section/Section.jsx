import { Component } from 'react';
import css from 'components/Section/Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className={css.SectionContainer}>
        <h2 className={css.Title}>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
