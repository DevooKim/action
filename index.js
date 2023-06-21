/**
 * @api {post} /api/v1/program 프로그램 생성
 * @apiName PostProgram
 * @apiGroup Program
 * @apiPermission 기관유저
 * @apiDescription
 * 프로그램을 생성한다.
 *
 * @apiHeader {String} x-user-id 유저 id
 *
 * @apiBody {String} institutionIndex 기관 index
 * @apiBody {String} [thumbnail] 썸네일url
 * @apiBody {String} name 프로그램 명
 * @apiBody {Number} [learningTime] 총 교육 시간
 * @apiBody {String='집합형','방문형'} type.camp 타입 - 캠프
 * @apiBody {String='장기','단기'} type.duration 타입 - 기간
 * @apiBody {String} [description] 프로그램 소개
 * @apiBody {String='강원특별자치도','경기도','세종특별자치시','경상남도','경상북도','광주광역시','대구광역시','대전광역시','부산광역시','서울특별시','울산광역시','인천광역시','전라남도','전라북도','제주특별자치도','충청남도','충청북도'} operateLocation 운영 지역
 * @apiBody {String} [contact] 문의처
 * @apiBody {Date} applyDate.start 신청 시작일
 * @apiBody {Date} applyDate.end 신청 종료일
 * @apiBody {Number[]{1-6}} targetGroup.elementarySchool 초등학교
 * @apiBody {Number[]{1-3}} targetGroup.middleSchool 중학교
 * @apiBody {Number[]{1-3}} targetGroup.highSchool 고등학교
 * @apiBody {String} [curriculum] 커리큘럼
 * @apiBody {String} [educationLocation.name] 교육 장소 - 장소명
 * @apiBody {String} [educationLocation.address] 교육 장소 - 주소
 * @apiBody {String[]} [attachedFiles] 첨부파일
 * @apiBody {String} [notice] Notice
 * @apiBody {Number{0-}} [price] 가격
 *
 */
