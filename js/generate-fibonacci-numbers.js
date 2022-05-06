window.bridges["generate-fibonacci-numbers"] = function () {
  var a = function () {
    var n = this;
    BigNumber.config({ EXPONENTIAL_AT: 1e9 });
    var t = u(n);
    if (!t) {
      n.output.setValue("");
      return;
    }
    var e = [];
    t.start == 0
      ? t.count == 1
        ? e.push(0)
        : t.count == 2
        ? (e.push(0), e.push(1))
        : t.count >= 3 && (e.push(0), e.push(1), e.push(1))
      : t.start == 1 &&
        (t.count == 1 ? e.push(1) : t.count >= 2 && (e.push(1), e.push(1)));
    for (
      var r = new BigNumber(1), i = new BigNumber(1), s = new BigNumber(1);
      e.length < t.count;

    )
      (s = new BigNumber(0).plus(r).plus(i)),
        s.gte(t.start) &&
          (e.length == 0 &&
            !s.eq(t.start) &&
            n.output.showWarningBadge(
              "Starting number is a not Fibonacci.",
              "You start the sequence from {0}, but the nearest following Fibonacci number is {1}.".format(
                t.start,
                s
              )
            ),
          e.push(s.toString())),
        (r = i),
        (i = s);
    return t.sep == "\\n" && (t.sep = "\n"), e.join(t.sep);
  };
  function u(n) {
    var t = n.options.get(),
      e = t.separator || "\n",
      r = t.start.trim();
    if (!/^-?\d+$/.test(r))
      return (
        n.output.showNegativeBadge(
          "Invalid start range.",
          "Starting range contains non digits."
        ),
        !1
      );
    if (((r = new BigNumber(r)), r.lt(0)))
      return (
        n.output.showNegativeBadge(
          "Invalid starting range.",
          "Fibonacci numbers start at 0 but you specified {0}.".format(
            r.toString()
          )
        ),
        !1
      );
    var i = t.count.trim();
    return /^\d+$/.test(i)
      ? ((i = parseInt(i)),
        i < 1
          ? (n.output.showNegativeBadge(
              "Invalid count.",
              "You can't generate less than one Fibonacci number!"
            ),
            !1)
          : { start: r, count: i, sep: e })
      : (n.output.showNegativeBadge(
          "Invalid count.",
          "Count contains non digits."
        ),
        !1);
  }
  return { converter: a, config: {} };
};
