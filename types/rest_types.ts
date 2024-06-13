/* Definitions */
export type CanaleInfo = {
  address: string;
  callCenterDescription: string;
  callCenterNumberPhone: string;
  capitaleSociale: string;
  companyName: string;
  fiscalCode: string;
  pIva: string;
  phoneNumber: string;
  privacyPolicyLink: string;
  selectedCookiesLink: string;
};

export type CanaleInfoDTO = {
  address: string;
  callCenterDescription: string;
  callCenterNumberPhone: string;
  capitaleSociale: string;
  companyName: string;
  fiscalCode: string;
  pIva: string;
  phoneNumber: string;
  privacyPolicyLink: string;
  selectedCookiesLink: string;
};

export type CanalePagamento = {
  backOfficeEmailAddresses: string[];
  brandDark: boolean;
  channelInfo: any;
  channelLegalInfo: any;
  channelStyle: any;
  cod: string;
  colourCode: string;
  customStyleActive: boolean;
  desc: string;
  imgPath: string;
  notificationReceivers: string[];
  orderUpdate: any;
  paymentMethodLimits: any;
  paymentNotification: boolean;
  privacyPolicyLink: string;
  regolePagamento: any[];
  selectedCookiesLink: string;
  valid: boolean;
};

export type ChannelLegalInfo = { termsAndConditionsUrl: string };

export type ChannelStyle = { button: any; footer: any; header: any };

export type ChannelStyleSection = {
  backgroundColor: string;
  textColor: string;
  textStyle: string;
};

export type CustomPreferences = {
  acceptedTermsAndConditions: boolean;
  blockRedirect: boolean;
  dateAcceptedTermsAndConditions: string;
  defaultLanguage: string;
  thankYouBehavior: string;
};

export type CustomPreferencesDTO = {
  acceptedTermsAndConditions: boolean;
  blockRedirect: boolean;
  defaultLanguage: string;
  thankYouBehavior: string;
};

export type EmailRequest = {
  jwt: string;
  subject: string;
  text: string;
  to: string;
};

export type FixtureRequestDto = {
  canaliPagamento: any[];
  jwt: string;
  metodiPagamento: any[];
};

export type InfoDTO = {
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
};

export type LinkCheckRequestDto = { refData: string };

export type LinkCheckResponseDto = {
  cellMask: string;
  mailMask: string;
  msg: string;
  refData: string;
  status: string;
  urlDescrER: string;
};

export type MetodoPagamento = {
  descrizione: string;
  gateway: string;
  iconPath: string;
  id: string;
  key_SIGNATURE_TERMINALE_PAYMENT_GATEWAY: string;
  nome: string;
  terminale_PAYMENT_GATEWAY: string;
  valid: boolean;
};

export type MetodoPagamentoDTO = {
  descrizione: string;
  gateway: string;
  iconPath: string;
  id: string;
  key_SIGNATURE_TERMINALE_PAYMENT_GATEWAY: string;
  nome: string;
  terminale_PAYMENT_GATEWAY: string;
};

export type OrderUpdate = {
  insertKIRIBOK: boolean;
  insertTW37: boolean;
  updateBTK: boolean;
};

export type PCLinkCheckSessionResponseDTO = {
  canceled: boolean;
  error: string;
  esito: string;
  gatewayInitialized: boolean;
  igfsCode: string;
  initialized: boolean;
  loading: boolean;
  pagamentoSelezionato: string;
  paymentId: string;
  started: boolean;
  statoTransazione: string;
  terminated: boolean;
  transactionId: string;
};

export type PCLinkNewSessionResponse = { childToken: string; childUrl: string };

export type Passenger = {
  city: string;
  countryCode: string;
  name: string;
  phoneNumber: string;
  postCode: string;
  street: string;
  surname: string;
};

export type PaymentInitRequest = {
  dateAcceptedTermsAndConditions: string;
  jwt: string;
  method: string;
  paymentRule: string;
};

export type PaymentInitResponse = {
  gatewayRedirectUrl: string;
  message: string;
  paymentId: string;
  statusCode: string;
  transactionId: string;
};

export type PaymentMethodLimits = { maxAmount: number; methodId: string };

export type PaymentRequest = {
  agencyCode: string;
  agencyName: string;
  amount: number;
  aziendaPratica: string;
  email: string;
  nomeGruppo: string;
  orderNumber: string;
  paymentMode: string;
  phoneNumber: string;
  specialEvent: string;
  timestamp: string;
};

export type PaymentRequestDTO = {
  agencyCode: string;
  agencyName: string;
  amount: number;
  aziendaPratica: string;
  email: string;
  nomeGruppo: string;
  orderNumber: string;
  paymentMode: string;
  phoneNumber: string;
  specialEvent: string;
  timestamp: string;
};

export type PaymentResult = { code: string; description: string };

export type PaymentResultDTO = { code: string; description: string };

export type PaymentVerifyFeResponse = {
  authCode: string;
  channel: string;
  channelColor: string;
  channelImg: string;
  channelName: string;
  code: string;
  externalRule: boolean;
  gatewayRedirectUrl: string;
  importo: string;
  importoPagato: string;
  message: string;
  pagamentoSelezionato: string;
  paymentId: string;
  status: string;
  statusCode: string;
  terminatedTimestamp: string;
  transactionId: string;
};

export type PaymentVerifyRequest = { jwt: string };

export type QRCheckSessionResponseDTO = {
  canceled: boolean;
  error: string;
  esito: string;
  gatewayInitialized: boolean;
  igfsCode: string;
  initialized: boolean;
  loading: boolean;
  pagamentoSelezionato: string;
  paymentId: string;
  started: boolean;
  statoTransazione: string;
  terminated: boolean;
  transactionId: string;
};

export type QRImageRequest = { url: string };

export type QrCheckSessionRequest = { childJwt: string; parentJwt: string };

export type QrNewSessionResponse = { childToken: string; childUrl: string };

export type RegolaPagamento = {
  azieRegola: string;
  brandRegola: string;
  codAdv: string;
  codicePagamento: string;
  dataPartenzaA: string;
  dataPartenzaDa: string;
  descrizione: string;
  destRegola: string;
  flussoRegola: string;
  giorniAntepartenzaA: number;
  giorniAntepartenzaDa: number;
  metodiPagamento: string[];
  modalitaPagamento: string;
  ordinale: number;
  ordiniA: string;
  ordiniDa: string;
  reteAdv: string;
  statusPratica: string;
  tipoImporto: string;
  tipoTransazione: string;
  valid: boolean;
  valoreImporto: number;
};

export type RegolaPagamentoDTO = {
  azieRegola: string;
  brandRegola: string;
  codAdv: string;
  codicePagamento: string;
  dataPartenzaA: string;
  dataPartenzaDa: string;
  descrizione: string;
  destRegola: string;
  flussoRegola: string;
  giorniAntepartenzaA: number;
  giorniAntepartenzaDa: number;
  metodiPagamento: any[];
  modalitaPagamento: string;
  ordinale: number;
  ordiniA: string;
  ordiniDa: string;
  reteAdv: string;
  statusPratica: string;
  tipoImporto: string;
  tipoTransazione: string;
  valoreImporto: number;
};

export type RegoleRequest = {
  amount: number;
  channel: string;
  dataPartenza: string;
  flusso: string;
  statoPratica: string;
};

export type SendQrCodeUrlRequest = { qrCodeUrl: string; to: string };

export type Session = {
  acceptedTermsAndConditions: boolean;
  acquirer: string;
  authCode: string;
  blockRedirect: boolean;
  callBackUrl: string;
  cancelUrl: string;
  canceled: boolean;
  canceledTimestamp: string;
  channel: string;
  circuito: string;
  dataPartenza: string;
  dateAcceptedTermsAndConditions: string;
  defaultLanguage: string;
  description: string;
  entryBlocked: boolean;
  error: string;
  esito: string;
  esitoAntifrode: string;
  externalRule: boolean;
  failureUrl: string;
  flusso: string;
  formattedInitializationTimestamp: string;
  gatewayInitialized: boolean;
  gatewayInitializedTimestamp: string;
  gatewayPaymentUrl: string;
  igfsCode: string;
  infoAggiuntive: any;
  initializationTimestamp: string;
  initialized: boolean;
  ipUtente: string;
  jwtId: string;
  mailUtente: string;
  merchantId: string;
  merchantTransactionId: string;
  metodoScelto: string;
  modalitaPagamento: string;
  mode: string;
  operazione: string;
  orderUpdateAlreadyDone: boolean;
  pagamentoSelezionato: string;
  panConto: string;
  passenger: any;
  paymentId: string;
  paymentNotifyAlreadySent: boolean;
  paymentRequest: any;
  paymentTokenOutput: string;
  pflRef: string;
  qrChildId: string;
  qrChildJwt: string;
  qrParentLoading: boolean;
  regolaScelta: string;
  result: any;
  sessionTimeLimit: number;
  started: boolean;
  startingTimestamp: string;
  statoPratica: string;
  statoTransazione: string;
  strumentoDiPagamento: string;
  successUrl: string;
  terminalId: string;
  terminated: boolean;
  terminatedTimestamp: string;
  thankYouBehavior: string;
  tipoTransazione: string;
  tipoVendita: string;
  titolare: string;
  totalAmount: number;
  tpax: string;
  trType: string;
  transactionDate: string;
  transactionId: string;
  ultimaFaseGestita: string;
  userCancel: boolean;
};

export type SessionDTO = {
  callBackUrl: string;
  cancelUrl: string;
  canceled: boolean;
  canceledTimestamp: string;
  channel: string;
  dataPartenza: string;
  description: string;
  failureUrl: string;
  flusso: string;
  gatewayInitialized: boolean;
  gatewayInitializedTimestamp: string;
  gatewayPaymentUrl: string;
  initializationTimestamp: string;
  initialized: boolean;
  jwtId: string;
  metodoScelto: string;
  mode: string;
  pagamentoSelezionato: string;
  paymentId: string;
  paymentRequest: any;
  regolaScelta: string;
  result: any;
  started: boolean;
  startingTimestamp: string;
  statoPratica: string;
  statusCode: string;
  successUrl: string;
  terminated: boolean;
  terminatedTimestamp: string;
  tipoVendita: string;
  totalAmount: number;
  trType: string;
  transactionId: string;
};

export type SessionInitRequest = {
  callBackUrl: string;
  cancelUrl: string;
  channel: string;
  customPreferences: any;
  dataPartenza: string;
  description: string;
  failureUrl: string;
  flusso: string;
  modalitaPagamento: string;
  passenger: any;
  payload: any;
  pflRefData: string;
  sessionTimeLimit: number;
  statoPratica: string;
  successUrl: string;
  uniqueMethod: any;
};

export type SessionInitResponse = {
  channel: string;
  errorUrl: string;
  frontendUrl: string;
  jwt: string;
  message: string;
  regole: any[];
  statusCode: string;
};

export type SessionVerifyRequest = { jwt: string };

export type SessionVerifyResponse = {
  agencyName: string;
  amount: number;
  brandIsDark: boolean;
  channel: string;
  channelColor: string;
  channelImg: string;
  channelInfo: any;
  channelLegalInfo: any;
  channelName: string;
  channelStyle: any;
  customPreferences: any;
  dataPartenza: string;
  description: string;
  email: string;
  message: string;
  modalitaPagamento: string;
  nomeGruppo: string;
  orderNumber: string;
  passenger: any;
  paymentMethodLimits: any;
  phoneNumber: string;
  regole: any[];
  sessionExpired: boolean;
  specialEvent: string;
  statusCode: string;
  terminated: boolean;
  tpax: string;
  userCancel: boolean;
};

export type SingleChannelRequestDto = { canalePagamento: any; jwt: string };

export type UniqueMethodDTO = { metodoScelto: string; regolaScelta: string };

export type UserDesk = {
  accountNonExpired: string;
  accountNonLocked: string;
  credentialsNonExpired: string;
  email: string;
  enabled: string;
  memberOf: string;
  name: string;
  password: string;
  role: string;
  surname: string;
  username: string;
};

export type VerifyOtpRequestDto = { otpData: string; refData: string };

/* Endpoints */
export type ChannelRulesReq = { regoleRequest: RegoleRequest };
export type ChannelRulesRes = any[];

export type EasypayDeskGetUserIdReq = { id: string };
export type EasypayDeskGetUserIdRes = UserDesk;

export type EasypayDeskSaveUserReq = { user: UserDesk };
export type EasypayDeskSaveUserRes = boolean;

export type EasypayPaymentDirectverifyReq = {
  paymentVerifyRequest: PaymentVerifyRequest;
};
export type EasypayPaymentDirectverifyRes = Session;

export type EasypayPaymentInitEasypayReq = {
  paymentInitRequest: PaymentInitRequest;
};
export type EasypayPaymentInitEasypayRes = PaymentInitResponse;

export type EasypayPaymentVerifyEasypayReq = {
  notification: boolean;
  orderUpdate: boolean;
  paymentVerifyRequest: PaymentVerifyRequest;
};
export type EasypayPaymentVerifyEasypayRes = PaymentVerifyFeResponse;

export type EasypaySessionReq = undefined;
export type EasypaySessionRes = string;

export type EasypaySessionCancelPaymentIdReq = { id: string };
export type EasypaySessionCancelPaymentIdRes = SessionDTO;

export type EasypaySessionGetIdReq = { id: string };
export type EasypaySessionGetIdRes = SessionDTO;

export type EasypaySessionInitReq = {
  sessionInitRequest: SessionInitRequest;
  tpax: string;
  verbose: boolean;
};
export type EasypaySessionInitRes = SessionInitResponse;

export type EasypaySessionVerifyReq = {
  sessionVerifyRequest: SessionVerifyRequest;
};
export type EasypaySessionVerifyRes = SessionVerifyResponse;

export type FixtureReq = undefined;
export type FixtureRes = string;

export type FixtureCreateChannelReq = { request: SingleChannelRequestDto };
export type FixtureCreateChannelRes = CanalePagamento;

export type FixtureGetAllFixtureReq = undefined;
export type FixtureGetAllFixtureRes = FixtureRequestDto;

export type FixtureGetChannelsIdReq = { id: string };
export type FixtureGetChannelsIdRes = CanalePagamento;

export type FixtureInitReq = { request: FixtureRequestDto };
export type FixtureInitRes = string;

export type FixtureUpdateChannelIdReq = {
  id: string;
  request: SingleChannelRequestDto;
};
export type FixtureUpdateChannelIdRes = CanalePagamento;

export type PaylinkOtpReq = { requestDto: VerifyOtpRequestDto };
export type PaylinkOtpRes = SessionInitResponse;

export type PaylinkRestoreReq = { requestDto: LinkCheckRequestDto };
export type PaylinkRestoreRes = LinkCheckResponseDto;

export type PaylinkVerifyReq = { requestDto: LinkCheckRequestDto };
export type PaylinkVerifyRes = LinkCheckResponseDto;

export type PclinkCheckChildSessionReq = { request: QrCheckSessionRequest };
export type PclinkCheckChildSessionRes = PCLinkCheckSessionResponseDTO;

export type PclinkSessionInitByJwtReq = { jwt: string };
export type PclinkSessionInitByJwtRes = PCLinkNewSessionResponse;

export type QrCheckChildSessionReq = { request: QrCheckSessionRequest };
export type QrCheckChildSessionRes = QRCheckSessionResponseDTO;

export type QrGenerateQrReq = { childUrl: QRImageRequest };
export type QrGenerateQrRes = string;

export type QrSendUrlByEmailReq = { request: SendQrCodeUrlRequest };
export type QrSendUrlByEmailRes = boolean;

export type QrSessionInitByJwtReq = { jwt: string };
export type QrSessionInitByJwtRes = QrNewSessionResponse;

export type SendEmailReq = { emailRequest: EmailRequest };
export type SendEmailRes = string;
