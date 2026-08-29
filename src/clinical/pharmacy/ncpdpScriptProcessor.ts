/**
 * AegisEHR - NCPDP SCRIPT v2017071 Message Processor
 */
export class NcpdpScriptProcessor {
  static formatNewRx(rxId: string) { return "<NewRx><RxId>" + rxId + "</RxId></NewRx>"; }
}
