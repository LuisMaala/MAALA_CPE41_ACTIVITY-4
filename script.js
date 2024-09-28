(function ($) {
    $(function () {

        $(window).on('scroll', function () {
            fnOnScroll();
        });

        $(window).on('resize', function () {
            fnOnResize();
        });

        var agTimeline = $('.js-timeline'),
        agTimelineLi    ne = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline-item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag
    })
})