export type CallState = {
  isMuted: boolean;
  isCallActive: boolean;
  isInitiator: boolean;
  type: "video" | "audio";
  signalingState:
    | "stable"
    | "have-local-offer"
    | "have-remote-offer"
    | "closed";
};

export type MediaStreamConfig = {
  video: boolean;
  audio: boolean;
};

export type PeerConnectionConfig = {
  iceServers: RTCIceServer[];
};
