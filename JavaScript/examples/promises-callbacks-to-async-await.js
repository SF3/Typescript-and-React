class Report {
  save() {}
}

function disableUI() {}

function enableUI() {}

function synchronous() {
  const exchangeRateReader = {
    read() {
      return [];
    }
  };
  const reportBuilder = {
    build(rates) {
      return new Report();
    }
  };
  const reportSaver = {
    save(report) {}
  };

  function algorithm() {
    disableUI();
    const exchangeRates = exchangeRateReader.read();
    const report = reportBuilder.build(exchangeRates);
    reportSaver.save(report);
    enableUI();
  }
}

function asynchronousCallback() {
  const exchangeRateReader = {
    read() {},
    onread: null
  };
  const reportBuilder = {
    build(rates) {},
    onbuild: null
  };
  const reportSaver = {
    save(report) {},
    onsave: null
  };

  function algorithm() {
    disableUI();
    exchangeRateReader.onread = (exchangeRates) => {
      reportBuilder.onbuild = (report) => {
        reportSaver.onsave = () => {
          enableUI();
        };
        reportSaver.save(report);
      };
      reportBuilder.build(exchangeRates);
    };
    exchangeRateReader.read();
  }
}

function asynchronousCallback2() {
  const exchangeRateReader = {
    read() {},
    onread: null
  };
  const reportBuilder = {
    build(rates) {},
    onbuild: null
  };
  const reportSaver = {
    save(report) {},
    onsave: null
  };

  function algorithm() {
    disableUI();
    exchangeRateReader.read();
    exchangeRateReader.onread = (exchangeRates) => {
      reportBuilder.build(exchangeRates);
    };
    reportBuilder.onbuild = (report) => {
      reportSaver.save(report);
    };
    reportSaver.onsave = () => {
      enableUI();
    };
  }
}

function asynchronousPromise() {
  const exchangeRateReader = {
    read() {
      return Promise.resolve([]);
    }
  };
  const reportBuilder = {
    build(rates) {
      return Promise.resolve(new Report());
    }
  };
  const reportSaver = {
    save(report) {
      return Promise.resolve();
    }
  };

  function algorithm() {
    disableUI();
    exchangeRateReader
        .read()
        .then((exchangeRates) => reportBuilder.build(exchangeRates))
        .then((report) => reportSaver.save(report))
        .then(enableUI);
  }
}

function asynchronousAsyncAwait() {
  const exchangeRateReader = {
    read() {
      return Promise.resolve([]);
    }
  };
  const reportBuilder = {
    build(rates) {
      return Promise.resolve(new Report());
    }
  };
  const reportSaver = {
    save(report) {
      return Promise.resolve();
    }
  };

  async function algorithm() {
    disableUI();
    const exchangeRates = await exchangeRateReader.read();
    const report = await reportBuilder.build(exchangeRates);
    await reportSaver.save(report);
    enableUI();
  }
}
