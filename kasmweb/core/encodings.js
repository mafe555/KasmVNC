/*
 * noVNC: HTML5 VNC client
 * Copyright (C) 2018 The noVNC Authors
 * Licensed under MPL 2.0 (see LICENSE.txt)
 *
 * See README.md for usage and integration instructions.
 */

export const encodings = {
    encodingRaw: 0,
    encodingCopyRect: 1,
    encodingRRE: 2,
    encodingHextile: 5,
    encodingTight: 7,
    encodingTightPNG: -260,

    pseudoEncodingQualityLevel9: -23,
    pseudoEncodingQualityLevel0: -32,
    pseudoEncodingDesktopSize: -223,
    pseudoEncodingLastRect: -224,
    pseudoEncodingCursor: -239,
    pseudoEncodingQEMUExtendedKeyEvent: -258,
    pseudoEncodingExtendedDesktopSize: -308,
    pseudoEncodingXvp: -309,
    pseudoEncodingFence: -312,
    pseudoEncodingContinuousUpdates: -313,
    pseudoEncodingCompressLevel9: -247,
    pseudoEncodingCompressLevel0: -256,
    pseudoEncodingWEBP: -1024,
    pseudoEncodingJpegVideoQualityLevel0: -1023,
    pseudoEncodingJpegVideoQualityLevel9: -1014,
    pseudoEncodingWebpVideoQualityLevel0: -1013,
    pseudoEncodingWebpVideoQualityLevel9: -1004,
    pseudoEncodingTreatLosslessLevel0: -1003,
    pseudoEncodingTreatLosslessLevel10: -993,
    pseudoEncodingPreferBandwidth: -992,
    pseudoEncodingDynamicQualityMinLevel0: -991,
    pseudoEncodingDynamicQualityMinLevel9: -982,
    pseudoEncodingDynamicQualityMaxLevel0: -981,
    pseudoEncodingDynamicQualityMaxLevel9: -972,
    pseudoEncodingVideoAreaLevel1: -971,
    pseudoEncodingVideoAreaLevel100: -871,
    pseudoEncodingVideoTimeLevel0: -870,
    pseudoEncodingVideoTimeLevel100: -770,

    pseudoEncodingFrameRateLevel10: -2048,
    pseudoEncodingFrameRateLevel60: -1998,
    pseudoEncodingMaxVideoResolution: -1997,
    pseudoEncodingVideoScalingLevel0: -1996,
    pseudoEncodingVideoScalingLevel9: -1987,
    pseudoEncodingVideoOutTimeLevel1: -1986,
    pseudoEncodingVideoOutTimeLevel100: -1887,
};

export function encodingName(num) {
    switch (num) {
        case encodings.encodingRaw:      return "Raw";
        case encodings.encodingCopyRect: return "CopyRect";
        case encodings.encodingRRE:      return "RRE";
        case encodings.encodingHextile:  return "Hextile";
        case encodings.encodingTight:    return "Tight";
        case encodings.encodingTightPNG: return "TightPNG";
        default:                         return "[unknown encoding " + num + "]";
    }
}
