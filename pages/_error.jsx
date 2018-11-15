import React from 'react';

type Props = {
    statusCode: number
}

export default class Error extends React.Component<Props> {
  static getInitialProps({ res, err }) {
    const getStatusCode = () => {
      if (res) {
        return res.statusCode;
      }
      if (err) {
        return err.statusCode;
      }
      return null;
    };
    return { statusCode: getStatusCode() };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}
