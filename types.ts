/* Definitions */
type CanaleInfo = { address: string; callCenterDescription: string; callCenterNumberPhone: string; capitaleSociale: string; companyName: string; fiscalCode: string; pIva: string; phoneNumber: string; privacyPolicyLink: string; selectedCookiesLink: string };

type CanaleInfoDTO = { address: string; callCenterDescription: string; callCenterNumberPhone: string; capitaleSociale: string; companyName: string; fiscalCode: string; pIva: string; phoneNumber: string; privacyPolicyLink: string; selectedCookiesLink: string };

type CanalePagamento = { backOfficeEmailAddresses: string[]; brandDark: boolean; channelInfo: any; channelLegalInfo: any; channelStyle: any; cod: string; colourCode: string; customStyleActive: boolean; desc: string; imgPath: string; notificationReceivers: string[]; orderUpdate: any; paymentMethodLimits: any; paymentNotification: boolean; privacyPolicyLink: string; regolePagamento: any[]; selectedCookiesLink: string; valid: boolean };

type ChannelLegalInfo = { termsAndConditionsUrl: string };

type ChannelStyle = { button: any; footer: any; header: any };

type ChannelStyleSection = { backgroundColor: string; textColor: string; textStyle: string };

type CustomPreferences = { acceptedTermsAndConditions: boolean; blockRedirect: boolean; dateAcceptedTermsAndConditions: string; defaultLanguage: string; thankYouBehavior: string };

type CustomPreferencesDTO = { acceptedTermsAndConditions: boolean; blockRedirect: boolean; defaultLanguage: string; thankYouBehavior: string };

type EmailRequest = { jwt: string; subject: string; text: string; to: string };

type FixtureRequestDto = { canaliPagamento: any[]; jwt: string; metodiPagamento: any[] };

type InfoDTO = { info1: string; info2: string; info3: string; info4: string; info5: string };

type LinkCheckRequestDto = { refData: string };

type LinkCheckResponseDto = { cellMask: string; mailMask: string; msg: string; refData: string; status: string; urlDescrER: string };

type MetodoPagamento = { descrizione: string; gateway: string; iconPath: string; id: string; key_SIGNATURE_TERMINALE_PAYMENT_GATEWAY: string; nome: string; terminale_PAYMENT_GATEWAY: string; valid: boolean };

type MetodoPagamentoDTO = { descrizione: string; gateway: string; iconPath: string; id: string; key_SIGNATURE_TERMINALE_PAYMENT_GATEWAY: string; nome: string; terminale_PAYMENT_GATEWAY: string };

type OrderUpdate = { insertKIRIBOK: boolean; insertTW37: boolean; updateBTK: boolean };

type PCLinkCheckSessionResponseDTO = { canceled: boolean; error: string; esito: string; gatewayInitialized: boolean; igfsCode: string; initialized: boolean; loading: boolean; pagamentoSelezionato: string; paymentId: string; started: boolean; statoTransazione: string; terminated: boolean; transactionId: string };

type PCLinkNewSessionResponse = { childToken: string; childUrl: string };

type Passenger = { city: string; countryCode: string; name: string; phoneNumber: string; postCode: string; street: string; surname: string };

type PaymentInitRequest = { dateAcceptedTermsAndConditions: string; jwt: string; method: string; paymentRule: string };

type PaymentInitResponse = { gatewayRedirectUrl: string; message: string; paymentId: string; statusCode: string; transactionId: string };

type PaymentMethodLimits = { maxAmount: number; methodId: string };

type PaymentRequest = { agencyCode: string; agencyName: string; amount: number; aziendaPratica: string; email: string; nomeGruppo: string; orderNumber: string; paymentMode: string; phoneNumber: string; specialEvent: string; timestamp: string };

type PaymentRequestDTO = { agencyCode: string; agencyName: string; amount: number; aziendaPratica: string; email: string; nomeGruppo: string; orderNumber: string; paymentMode: string; phoneNumber: string; specialEvent: string; timestamp: string };

type PaymentResult = { code: string; description: string };

type PaymentResultDTO = { code: string; description: string };

type PaymentVerifyFeResponse = { authCode: string; channel: string; channelColor: string; channelImg: string; channelName: string; code: string; externalRule: boolean; gatewayRedirectUrl: string; importo: string; importoPagato: string; message: string; pagamentoSelezionato: string; paymentId: string; status: string; statusCode: string; terminatedTimestamp: string; transactionId: string };

type PaymentVerifyRequest = { jwt: string };

type QRCheckSessionResponseDTO = { canceled: boolean; error: string; esito: string; gatewayInitialized: boolean; igfsCode: string; initialized: boolean; loading: boolean; pagamentoSelezionato: string; paymentId: string; started: boolean; statoTransazione: string; terminated: boolean; transactionId: string };

type QRImageRequest = { url: string };

type QrCheckSessionRequest = { childJwt: string; parentJwt: string };

type QrNewSessionResponse = { childToken: string; childUrl: string };

type RegolaPagamento = { azieRegola: string; brandRegola: string; codAdv: string; codicePagamento: string; dataPartenzaA: string; dataPartenzaDa: string; descrizione: string; destRegola: string; flussoRegola: string; giorniAntepartenzaA: number; giorniAntepartenzaDa: number; metodiPagamento: string[]; modalitaPagamento: string; ordinale: number; ordiniA: string; ordiniDa: string; reteAdv: string; statusPratica: string; tipoImporto: string; tipoTransazione: string; valid: boolean; valoreImporto: number };

type RegolaPagamentoDTO = { azieRegola: string; brandRegola: string; codAdv: string; codicePagamento: string; dataPartenzaA: string; dataPartenzaDa: string; descrizione: string; destRegola: string; flussoRegola: string; giorniAntepartenzaA: number; giorniAntepartenzaDa: number; metodiPagamento: any[]; modalitaPagamento: string; ordinale: number; ordiniA: string; ordiniDa: string; reteAdv: string; statusPratica: string; tipoImporto: string; tipoTransazione: string; valoreImporto: number };

type RegoleRequest = { amount: number; channel: string; dataPartenza: string; flusso: string; statoPratica: string };

type SendQrCodeUrlRequest = { qrCodeUrl: string; to: string };

type Session = { acceptedTermsAndConditions: boolean; acquirer: string; authCode: string; blockRedirect: boolean; callBackUrl: string; cancelUrl: string; canceled: boolean; canceledTimestamp: string; channel: string; circuito: string; dataPartenza: string; dateAcceptedTermsAndConditions: string; defaultLanguage: string; description: string; entryBlocked: boolean; error: string; esito: string; esitoAntifrode: string; externalRule: boolean; failureUrl: string; flusso: string; formattedInitializationTimestamp: string; gatewayInitialized: boolean; gatewayInitializedTimestamp: string; gatewayPaymentUrl: string; igfsCode: string; infoAggiuntive: any; initializationTimestamp: string; initialized: boolean; ipUtente: string; jwtId: string; mailUtente: string; merchantId: string; merchantTransactionId: string; metodoScelto: string; modalitaPagamento: string; mode: string; operazione: string; orderUpdateAlreadyDone: boolean; pagamentoSelezionato: string; panConto: string; passenger: any; paymentId: string; paymentNotifyAlreadySent: boolean; paymentRequest: any; paymentTokenOutput: string; pflRef: string; qrChildId: string; qrChildJwt: string; qrParentLoading: boolean; regolaScelta: string; result: any; sessionTimeLimit: number; started: boolean; startingTimestamp: string; statoPratica: string; statoTransazione: string; strumentoDiPagamento: string; successUrl: string; terminalId: string; terminated: boolean; terminatedTimestamp: string; thankYouBehavior: string; tipoTransazione: string; tipoVendita: string; titolare: string; totalAmount: number; tpax: string; trType: string; transactionDate: string; transactionId: string; ultimaFaseGestita: string; userCancel: boolean };

type SessionDTO = { callBackUrl: string; cancelUrl: string; canceled: boolean; canceledTimestamp: string; channel: string; dataPartenza: string; description: string; failureUrl: string; flusso: string; gatewayInitialized: boolean; gatewayInitializedTimestamp: string; gatewayPaymentUrl: string; initializationTimestamp: string; initialized: boolean; jwtId: string; metodoScelto: string; mode: string; pagamentoSelezionato: string; paymentId: string; paymentRequest: any; regolaScelta: string; result: any; started: boolean; startingTimestamp: string; statoPratica: string; statusCode: string; successUrl: string; terminated: boolean; terminatedTimestamp: string; tipoVendita: string; totalAmount: number; trType: string; transactionId: string };

type SessionInitRequest = { callBackUrl: string; cancelUrl: string; channel: string; customPreferences: any; dataPartenza: string; description: string; failureUrl: string; flusso: string; modalitaPagamento: string; passenger: any; payload: any; pflRefData: string; sessionTimeLimit: number; statoPratica: string; successUrl: string; uniqueMethod: any };

type SessionInitResponse = { channel: string; errorUrl: string; frontendUrl: string; jwt: string; message: string; regole: any[]; statusCode: string };

type SessionVerifyRequest = { jwt: string };

type SessionVerifyResponse = { agencyName: string; amount: number; brandIsDark: boolean; channel: string; channelColor: string; channelImg: string; channelInfo: any; channelLegalInfo: any; channelName: string; channelStyle: any; customPreferences: any; dataPartenza: string; description: string; email: string; message: string; modalitaPagamento: string; nomeGruppo: string; orderNumber: string; passenger: any; paymentMethodLimits: any; phoneNumber: string; regole: any[]; sessionExpired: boolean; specialEvent: string; statusCode: string; terminated: boolean; tpax: string; userCancel: boolean };

type SingleChannelRequestDto = { canalePagamento: any; jwt: string };

type UniqueMethodDTO = { metodoScelto: string; regolaScelta: string };

type UserDesk = { accountNonExpired: string; accountNonLocked: string; credentialsNonExpired: string; email: string; enabled: string; memberOf: string; name: string; password: string; role: string; surname: string; username: string };

type VerifyOtpRequestDto = { otpData: string; refData: string };

/* Endpoints */
export type ChannelulesReq = { regoleRequest: RegoleRequest };
export type ChannelulesRes = any[];

export type EasypayesketSerdReq = { id: string };
export type EasypayesketSerdRes = UserDesk;

export type EasypayeskaveSerReq = { user: UserDesk };
export type EasypayeskaveSerRes = boolean;

export type EasypayaymentirectverifyReq = { paymentVerifyRequest: PaymentVerifyRequest };
export type EasypayaymentirectverifyRes = Session;

export type EasypayaymentnitAsypayReq = { paymentInitRequest: PaymentInitRequest };
export type EasypayaymentnitAsypayRes = PaymentInitResponse;

export type EasypayaymenterifyAsypayReq = { notification: boolean; orderUpdate: boolean; paymentVerifyRequest: PaymentVerifyRequest };
export type EasypayaymenterifyAsypayRes = PaymentVerifyFeResponse;

export type EasypayessionReq = undefined;
export type EasypayessionRes = string;

export type EasypayessionancelAymentdReq = { id: string };
export type EasypayessionancelAymentdRes = SessionDTO;

export type EasypayessionetdReq = { id: string };
export type EasypayessionetdRes = SessionDTO;

export type EasypayessionnitReq = { sessionInitRequest: SessionInitRequest; tpax: string; verbose: boolean };
export type EasypayessionnitRes = SessionInitResponse;

export type EasypayessionerifyReq = { sessionVerifyRequest: SessionVerifyRequest };
export type EasypayessionerifyRes = SessionVerifyResponse;

export type FixtureReq = undefined;
export type FixtureRes = string;

export type FixturereateHannelReq = { request: SingleChannelRequestDto };
export type FixturereateHannelRes = CanalePagamento;

export type FixtureetLlIxtureReq = undefined;
export type FixtureetLlIxtureRes = FixtureRequestDto;

export type FixtureetHannelsdReq = { id: string };
export type FixtureetHannelsdRes = CanalePagamento;

export type FixturenitReq = { request: FixtureRequestDto };
export type FixturenitRes = string;

export type FixturepdateHanneldReq = { id: string; request: SingleChannelRequestDto };
export type FixturepdateHanneldRes = CanalePagamento;

export type PaylinktpReq = { requestDto: VerifyOtpRequestDto };
export type PaylinktpRes = SessionInitResponse;

export type PaylinkestoreReq = { requestDto: LinkCheckRequestDto };
export type PaylinkestoreRes = LinkCheckResponseDto;

export type PaylinkerifyReq = { requestDto: LinkCheckRequestDto };
export type PaylinkerifyRes = LinkCheckResponseDto;

export type PclinkheckHildEssionReq = { request: QrCheckSessionRequest };
export type PclinkheckHildEssionRes = PCLinkCheckSessionResponseDTO;

export type PclinkessionNitYwtReq = { jwt: string };
export type PclinkessionNitYwtRes = PCLinkNewSessionResponse;

export type QrheckHildEssionReq = { request: QrCheckSessionRequest };
export type QrheckHildEssionRes = QRCheckSessionResponseDTO;

export type QrenerateRReq = { childUrl: QRImageRequest };
export type QrenerateRRes = string;

export type QrendRlYMailReq = { request: SendQrCodeUrlRequest };
export type QrendRlYMailRes = boolean;

export type QressionNitYwtReq = { jwt: string };
export type QressionNitYwtRes = QrNewSessionResponse;

export type SendMailReq = { emailRequest: EmailRequest };
export type SendMailRes = string;

